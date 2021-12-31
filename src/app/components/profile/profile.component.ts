import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../services/authentication.service';

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
  public details: any;
  public userdata: any;
  public email="";
  public originalpass="";
  public oldpass="";
  public oldpasserror=false;

  constructor(private toastr: ToastrService, private authenticate: AuthenticationService,) { }

  ngOnInit(): void {

    this.details=localStorage.getItem('user');
    this.userdata=JSON.parse(this.details)
    this.email=this.userdata.email;
    this.originalpass=this.userdata.password

    this.DetailForm = new FormGroup({
      name: new FormControl(this.userdata.name, [Validators.minLength(3), Validators.required]),
      mobile: new FormControl(this.userdata.mobile ,[Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]*$"), Validators.required]),
      location: new FormControl(this.userdata.location ,[Validators.minLength(3), Validators.required]),
      oldpassword: new FormControl(''),
      password: new FormControl('', Validators.minLength(8))
    })
  }

  SaveChanges()
  {

    const updatedData = {
      name: this.userdata.name,
      email: this.email,
      mobile: this.userdata.mobile,
      location: this.userdata.location,
      password: this.userdata.password
    }

    if(this.DetailForm.value.oldpassword!="")
    {
      if(this.DetailForm.value.oldpassword!=this.originalpass)
      {
        this.oldpasserror=true
      }
      else
      {
        this.oldpasserror=false
        if(this.DetailForm.value.password!=null)
        {
          updatedData.password=this.DetailForm.value.password;
        }
      }
    }

    if(this.userdata.name!=this.DetailForm.value.name)
    {
      updatedData.name=this.DetailForm.value.name
    }

    if(this.userdata.mobile!=this.DetailForm.value.mobile)
    {
      updatedData.mobile=this.DetailForm.value.mobile
    }

    if(this.userdata.location!=this.DetailForm.value.location)
    {
      updatedData.location=this.DetailForm.value.location
    }

    this.authenticate.updateUser(updatedData)
    .subscribe((data: any) => {
      console.log(data);
      localStorage.setItem('user', JSON.stringify(updatedData));
      this.DisplaySuccessToastr("Data was Updated Successfully");

    }, (err: any) => {
      this.DisplayErrorToastr("Some Error Occured While updating the details. So, Please Fill All the details")
    })

  }

  CheckOldPassword()
  {
    if(this.DetailForm.value.oldpassword!="")
    {
      if(this.DetailForm.value.oldpassword!=this.originalpass)
      {
        this.oldpasserror=true
      }
      else
      {
        this.oldpasserror=false
      }
    }
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
