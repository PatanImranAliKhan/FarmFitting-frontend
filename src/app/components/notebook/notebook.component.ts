import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
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
  public expenses=[]
  public revenues=[]
  public details: any;
  public userdata: any;
  public editdataid=0;
  public editdatapurpose="";
  public editdataprice=0;

  constructor(private toastr: ToastrService, private notebookservice: NotebookService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.details=localStorage.getItem('user');
    this.userdata=JSON.parse(this.details)

    if(this.details==null)
    {
      this.DisplayErrorToastr("Session time out Please Login Again")
      this.router.navigate(['/login'])
    }

    this.NoteForm = new FormGroup({
      email: new FormControl(this.userdata.email),
      purpose: new FormControl('', [Validators.minLength(2), Validators.required]),
      price: new FormControl(0,Validators.required),
      type: new FormControl('Revenues/Expenses')
    })
    this.getDetails();
  }

  getDetails()
  {
    this.notebookservice.getFinanceByType(this.userdata.email,"Expenses")
    .subscribe((data: any)=> {
      this.expenses=data;
      console.log(this.expenses);
      this.getRevenueDetails();
    }, (err: any) => {
      console.log(err);
    })
    
  }

  getRevenueDetails()
  {
    this.notebookservice.getFinanceByType(this.userdata.email,"Revenues")
    .subscribe((data: any)=> {
      this.revenues=data;
      console.log(this.revenues);
      this.getTotalPrices()
    }, (err: any) => {
      console.log(err);
    })
  }

  getTotalPrices()
  {
    const n1=this.expenses.length;
    for(let i=0;i<n1;i++)
    {
      this.expensesPrice+=this.expenses[i]['price'];
    }

    const n2=this.revenues.length;
    for(let i=0;i<n2;i++)
    {
      this.revenuesPrice+=this.revenues[i]['price'];
    }
    
  }

  AddtoExpences()
  {
    if(this.NoteForm.value.purpose=="" || this.NoteForm.value.price==0)
    {
      this.DisplayErrorToastr("Fill the given fields Correctly")
      return;
    }

    this.NoteForm.get('type')?.setValue("Expenses"); 

    
    this.notebookservice.addFinance(this.NoteForm.value)
    .subscribe((data: any) => {
      this.DisplaySuccessToastr("Added Successfully")
      window.location.reload();
    },(err: any) => {
      this.DisplayErrorToastr("Not Added")
    } )
   
  }

  AddtoRevenues()
  {
    if(this.NoteForm.value.purpose=="" || this.NoteForm.value.price==0)
    {
      this.DisplayErrorToastr("Fill the given fields Correctly")
      return;
    }

    this.NoteForm.get('type')?.setValue("Revenues");
    this.notebookservice.addFinance(this.NoteForm.value)
    .subscribe((data: any) => {
      this.DisplaySuccessToastr("Added Successfully")
      window.location.reload();
    },(err: any) => {
      this.DisplayErrorToastr("Not Added")
    } )

  }

  DisplayErrorToastr(message: any)
  {
    this.toastr.error(message);
  }

  DisplaySuccessToastr(message: any)
  {
    this.toastr.success(message)
  }   

  GetDataIntoForm(id: any,purp: any, prc: any)
  {
    this.editdataid=id;
    this.editdatapurpose=purp;
    this.editdataprice=prc;
    console.log(this.editdatapurpose);
    
  }


  EditExpences()
  {
    const object = {
      id: this.editdataid,
      email: this.userdata.email,
      purpose: this.editdatapurpose,
      price: this.editdataprice,
      type: "Expenses"
    }

    console.log(object);
    

    this.notebookservice.updateFinance(object)
    .subscribe((data: any) => {
      this.DisplaySuccessToastr("Edited Successfully")
      window.location.reload();
    },(err: any) => {
      this.DisplayErrorToastr("Not Edited")
    } )
  }

  EditRevenue()
  {
    const object = {
      id: this.editdataid,
      email: this.userdata.email,
      purpose: this.editdatapurpose,
      price: this.editdataprice,
      type: "Revenues"
    }

    this.notebookservice.updateFinance(object)
    .subscribe((data: any) => {
      this.DisplaySuccessToastr("Edited Successfully")
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    },(err: any) => {
      this.DisplayErrorToastr("Not Edited")
    } )
  }

  DeleteRecord(id: any)
  {
    this.notebookservice.deleteRecord(id)
    .subscribe((data: any) => {
      this.DisplaySuccessToastr("Deleted Successfully")
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    },(err: any) => {
      this.DisplayErrorToastr("Not Edited")
    } )
  }

}
