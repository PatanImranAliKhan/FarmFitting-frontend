import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public DetailForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.minLength(3), Validators.required]),
    mobile: new FormControl('' ,Validators.pattern("^[0-9]*$")),
    location: new FormControl('', Validators.minLength(5)),
    password: new FormControl('', Validators.minLength(8))
  })
  public details=[];

  constructor() { }

  ngOnInit(): void {

    // this.details=JSON.stringify(localStorage.getItem('user'));

    this.DetailForm = new FormGroup({
      name: new FormControl('', [Validators.minLength(3), Validators.required]),
      mobile: new FormControl('' ,[Validators.minLength(10),Validators.pattern("^[0-9]*$"), Validators.required]),
      location: new FormControl('',[Validators.minLength(3), Validators.required]),
      password: new FormControl('', Validators.minLength(8))
    })
  }

}
