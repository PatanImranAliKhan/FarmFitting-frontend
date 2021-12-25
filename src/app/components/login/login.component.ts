import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public LoginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.minLength(10)),
    password: new FormControl('', Validators.minLength(8))
  });

  public invalidemail = false;
  public invalidpass = false;
  public errMess: String="";
  public details: any=[]

  constructor(private route: ActivatedRoute, private router: Router, private authenticate: AuthenticationService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl('', Validators.minLength(10)),
      password: new FormControl('', Validators.minLength(8))
    });
  }

  ValidateEmail() {
    // if(this.LoginForm.value.email.match(
    //   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    // ))
    // {
    //   this.invalidemail=true
    // }
    var re = /\S+@\S+\.\S+/;
    if (!re.test(this.LoginForm.value.email)) {
      this.invalidemail = true;
    }
    else {
      this.invalidemail = false;
    }
  }

  ValidatePassword() {
    if (this.LoginForm.value.password.length >= 8) {
      this.invalidpass = false;
    }
    else {
      this.invalidpass = true;
    }
    console.log(this.invalidpass)
  }

  Submit() {
    console.log(this.LoginForm)
    
    this.authenticate.getUser(this.LoginForm.value.email,this.LoginForm.value.password)
      .subscribe((details: any) => {
        this.details = details;
        this.errMess = "";
        console.log(this.details);
        // localStorage.setItem('user', JSON.stringify(this.details.resp[0]));

        if(this.details.status=="Found"){
          this.DisplaySuccessToastr("Login Success");
          this.authenticate.User = this.LoginForm.value.email
          this.router.navigate(['/home']);
        }
        else{
          this.DisplayErrorToastr("Login Failed");
          this.router.navigate(['/login']);
        }
      }, (errMess: any) => {
        this.errMess = errMess;
        this.details = null;
      });
    const message = "imran";
  }

  getformControl() {
    return this.LoginForm.controls;
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
