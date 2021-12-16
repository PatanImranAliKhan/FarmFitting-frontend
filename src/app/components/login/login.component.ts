import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public LoginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.minLength(10)),
    password: new FormControl('',Validators.minLength(8))
  });

  public invalidemail=false;
  public invalidpass=false;
  constructor() { }

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl('', Validators.minLength(10)),
      password: new FormControl('',Validators.minLength(8))
    });
  }

  ValidateEmail() 
  {
    // if(this.LoginForm.value.email.match(
    //   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    // ))
    // {
    //   this.invalidemail=true
    // }
    var re = /\S+@\S+\.\S+/;
    if(!re.test(this.LoginForm.value.email))
    {
      this.invalidemail=true;
    }
    else
    {
      this.invalidemail=false;
    }
  }

  ValidatePassword()
  {
    if(this.LoginForm.value.password.length>=8)
    {
      this.invalidpass=false;
    }
    else
    {
      this.invalidpass=true;
    }
    console.log(this.invalidpass)
  }

  Submit()
  {
    console.log(this.LoginForm)
  }

  getformControl()
  {
    return this.LoginForm.controls;
  }

}
