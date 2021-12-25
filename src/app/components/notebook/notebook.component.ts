import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NotebookService } from '../../services/notebook.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css']
})
export class NotebookComponent implements OnInit {

  public NoteForm: FormGroup = new FormGroup({
    text: new FormControl('', [Validators.minLength(3), Validators.required]),
    price: new FormControl(Validators.required),
    // type :new FormControl
  })

  public expensesPrice=0
  public revenuesPrice=0;
  type:any
  public errMess: String="";
  public details: any=[]

  constructor(private toastr: ToastrService, private notebookservice: NotebookService,private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.NoteForm = new FormGroup({
      text: new FormControl('', [Validators.minLength(3), Validators.required]),
      price: new FormControl(Validators.required),
      // type:new FormControl
    })
  }

  AddtoExpences()
  {
      this.NoteForm.value.type = "expense"
      this.NoteForm.value.id = this.getRandomInt();
      this.NoteForm.value.email = this.authService.User


      this.notebookservice.addFinance(this.NoteForm)
      .subscribe((details:any)=>{
        console.log(details)
        this.DisplaySuccessToastr("Added to record")
      }, (errMess: any) => {
        this.errMess = errMess;
        this.details = null;
      });

  }

  AddtoRevenues()
  {
    this.NoteForm.value.type = "revenue"
    this.NoteForm.value.id = this.getRandomInt();
    this.NoteForm.value.email = this.authService.User

      this.notebookservice.addFinance(this.NoteForm)
      .subscribe((details:any)=>{
        this.notebookservice.addFinance(this.NoteForm)
        this.DisplaySuccessToastr("Added to record")
      }, (errMess: any) => {
        this.errMess = errMess;
        this.details = null;
      });
  }
  min:any;
  max:any;
  getRandomInt() : number{
    this.min = Math.ceil(1);
    this.max = Math.floor(100000);
    return Math.floor(Math.random() * (100000 - 1 + 1)) + 1; 
  }

  DisplayErrorToastr(message: any)
  {
    this.toastr.error(message);
  }

  DisplaySuccessToastr(message: any)
  {
    this.toastr.success(message)
  }   

}
