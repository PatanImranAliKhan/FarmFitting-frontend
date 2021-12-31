import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FeedbackService } from '../../services/feedback.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public ContactForm: FormGroup=new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    rate: new FormControl(),
    feedback: new FormControl('', [Validators.required])
  })

  public details: any;
  public userdata: any;

  star1=false;
  star2=false;
  star3=false;
  star4=false;
  star5=false;
  stars=[1,2,3,4,5];
  rating=0;

  constructor(private feedbackservice: FeedbackService, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.details=localStorage.getItem('user');
    this.userdata=JSON.parse(this.details)

    this.ContactForm=new FormGroup({
      name: new FormControl({value: this.userdata.name, disabled: true}),
      email: new FormControl({value: this.userdata.email, disabled: true}),
      mobile: new FormControl({value: this.userdata.mobile, disabled: true}),
      rating: new FormControl(),
      feedback: new FormControl('', [Validators.required])
    })
  }

  SubmitFeedback()
  {    
    const object = {
      name: this.userdata.name,
      email: this.userdata.email,
      mobile: this.userdata.mobile,
      rating: this.ContactForm.value.rating,
      feedback: this.ContactForm.value.feedback
    }
    this.feedbackservice.addFeedbaackDetails(object)
    .subscribe((data: any) => {
      console.log(data);
      this.openDialogForSuccess();
    },(err:any) => {
      console.log(err);
      
      this.openDialogForError();
    });
    
  }

  openDialogForSuccess()
  {    
    this.toastr.success('Feedback has sent Successfully');
  }

  openDialogForError()
  {
    this.toastr.error("Received Error while sending feeding");
  }

  Star1()
  {
    this.ContactForm.get('rate')?.setValue(1)
  }

  Star2()
  {
    this.ContactForm.get('rate')?.setValue(2)
  }

  Star3()
  {
    this.ContactForm.get('rate')?.setValue(3)
  }

  Star4()
  {
    this.ContactForm.get('rate')?.setValue(4)
  }

  Star5()
  {
    this.ContactForm.get('rate')?.setValue(5)
  }

  Sub1()
  {
    this.star1=true;
    this.star2=false;
    this.star3=false;
    this.star4=false;
    this.star5=false;
    this.rating=1;
    this.ContactForm.controls.rating.setValue(this.rating);
  }

  Sub2()
  {
    this.star1=true;
    this.star2=true;
    this.star3=false;
    this.star4=false;
    this.star5=false;
    this.rating=2;
    this.ContactForm.controls.rating.setValue(this.rating);
  }

  Sub3()
  {
    this.star1=true;
    this.star2=true;
    this.star3=true;
    this.star4=false;
    this.star5=false;
    this.rating=3;
    this.ContactForm.controls.rating.setValue(this.rating);
  }

  Sub4()
  {
    this.star1=true;
    this.star2=true;
    this.star3=true;
    this.star4=true;
    this.star5=false;
    this.rating=4;
    this.ContactForm.controls.rating.setValue(this.rating);
  }

  Sub5()
  {
    this.star1=true;
    this.star2=true;
    this.star3=true;
    this.star4=true;
    this.star5=true;
    this.rating=5;
    this.ContactForm.controls.rating.setValue(this.rating);
  }

}
