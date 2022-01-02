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
  public errMess: String = "";
  public details: any = []

  constructor(private route: ActivatedRoute, private router: Router, private authenticate: AuthenticationService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl('', Validators.minLength(10)),
      password: new FormControl('', Validators.minLength(8))
    });
    const abc=localStorage.getItem('user') || "";
    if(abc!="")
    {
      this.router.navigate(['/home'])
    }
    // console.log(abc);
    

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
  }

  Submit() {
    // console.log(this.LoginForm)

    this.authenticate.getUser(this.LoginForm.value.email, this.LoginForm.value.password)
      .subscribe((details: any) => {
        if (details.status == "Found") {
          console.log("hello");
          
          this.LoginSuccess();
        }
        else {
          this.DisplayErrorToastr("Invalid Credentails");
        }
        // 
      }, (errMess: any) => {
        this.errMess = errMess;
        this.details = null;
      });
  }

  LoginSuccess() {
    this.authenticate.findUser(this.LoginForm.value.email)
      .subscribe((data: any) => {
        localStorage.setItem('user', JSON.stringify(data));
      })
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 2000);
    this.DisplaySuccessToastr("Login Success")
  }

  getformControl() {
    return this.LoginForm.controls;
  }

  DisplayErrorToastr(message: any) {
    this.toastr.error(message);
  }

  DisplaySuccessToastr(message: any) {
    this.toastr.success(message)
  }

}
