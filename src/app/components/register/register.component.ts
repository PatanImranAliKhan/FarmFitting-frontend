import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.minLength(3), Validators.required]),
      email: new FormControl('', [Validators.minLength(10), Validators.required]),
      mobile: new FormControl('' ,[Validators.minLength(10),Validators.pattern("^[0-9]*$"), Validators.required]),
      location: new FormControl('', [Validators.minLength(3), Validators.required]),
      password: new FormControl('', [Validators.minLength(8), Validators.required])
    })
  }

  Submit()
  {
    console.log(this.registerForm.value)
  }

}
