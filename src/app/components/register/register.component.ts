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
    email: new FormControl('', Validators.minLength(10)),
    mobile: new FormControl('' ,Validators.pattern("^[0-9]*$")),
    location: new FormControl('', Validators.minLength(2)),
    password: new FormControl('', Validators.minLength(8))
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
      email: new FormControl('', Validators.minLength(10)),
      mobile: new FormControl('' ,Validators.pattern("^[0-9]*$")),
      location: new FormControl('', Validators.minLength(5)),
      password: new FormControl('', Validators.minLength(8))
    })
  }

  Submit()
  {
    console.log(this.registerForm.value)
  }

}
