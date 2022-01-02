import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private router: Router, private toastr: ToastrService, private authenticate: AuthenticationService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.minLength(3), Validators.required]),
      email: new FormControl('', [Validators.minLength(10), Validators.required]),
      mobile: new FormControl('' ,[Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]*$"), Validators.required]),
      location: new FormControl('', [Validators.minLength(3), Validators.required]),
      password: new FormControl('', [Validators.minLength(8), Validators.required])
    })

    const abc=localStorage.getItem('user') || "";
    if(abc!="")
    {
      this.router.navigate(['/home'])
    }
  }

  Submit()
  {
    
    // console.log(this.registerForm.value)

    this.authenticate.findUser(this.registerForm.value.email)
    .subscribe((resp: any) => {
      if(resp!=null)
      {
        this.DisplayErrorToastr("This Email was already registered.")
        return;
      }
      else
      {
        this.Register();
      }
      
    })

    
  }

  Register()
  {
    this.authenticate.addUser(this.registerForm.value)
      .subscribe((data: any) => {
        localStorage.setItem('user',JSON.stringify(this.registerForm.value));
        if(data.status=="Success")
        {
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 2000);
          this.DisplaySuccessToastr("Registration was Success");
        }
        else
        {
          this.DisplayErrorToastr("Some Error has been Occured please try after some time.")
        }

      }, (errMess: any) => {
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
