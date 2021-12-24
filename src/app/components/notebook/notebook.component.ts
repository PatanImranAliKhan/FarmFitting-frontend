import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NotebookService } from '../../services/notebook.service';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css']
})
export class NotebookComponent implements OnInit {

  public NoteForm: FormGroup = new FormGroup({
    text: new FormControl('', [Validators.minLength(3), Validators.required]),
    price: new FormControl(Validators.required),
  })

  public expensesPrice=0
  public revenuesPrice=0;

  constructor(private toastr: ToastrService, private notebookservice: NotebookService) { }

  ngOnInit(): void {
    this.NoteForm = new FormGroup({
      text: new FormControl('', [Validators.minLength(3), Validators.required]),
      price: new FormControl(Validators.required),
    })
  }

  AddtoExpences()
  {
    
  }

  AddtoRevenues()
  {

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
