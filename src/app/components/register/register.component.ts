import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.minLength(3), Validators.required]),
    email: new FormControl('', [Validators.minLength(10), Validators.required]),
    mobile: new FormControl('' ,[Validators.minLength(10),Validators.pattern("^[0-9]*$"), Validators.required]),
    location: new FormControl('', [Validators.minLength(3), Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.required])
  })

  public invalidname=false;
  public invalidemail=false;
  public invalidmobile=false;
  public invalidlocation=false;
  public invalidpass=false;
  public response="";
  public errMess="";

  constructor(private toastr: ToastrService, private authenticate: AuthenticationService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.minLength(3), Validators.required]),
      email: new FormControl('', [Validators.minLength(10), Validators.required]),
      mobile: new FormControl('' ,[Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]*$"), Validators.required]),
      location: new FormControl('', [Validators.minLength(3), Validators.required]),
      password: new FormControl('', [Validators.minLength(8), Validators.required])
    })
  }

  Submit()
  {
    
    console.log(this.registerForm.value)
    this.authenticate.addUser(this.registerForm.value)
      .subscribe((data: any) => {
        this.response = data;
        this.errMess = "";
        console.log(this.response);
        this.DisplaySuccessToastr("Registration was Success");

      }, (errMess: any) => {
        this.errMess = errMess;
        this.response = "";
        this.DisplayErrorToastr("Some Error has been Occured please  try after some time.")
      });
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