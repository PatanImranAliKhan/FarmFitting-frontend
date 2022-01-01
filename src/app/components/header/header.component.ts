import { Component, OnInit } from '@angular/core';
import './translate.js'
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public languages = [['English','EN'], ['French','FR'], ['Belgium','BG']];

  public details: any;
  public userdata: any;

  constructor(private toastr: ToastrService, private translate: TranslateService, private router: Router,) { 
    
    translate.setDefaultLang('en');
    // const browserlang=translate.getBrowserLang();
    // translate.use(browserlang?browserlang:'en');
    // translate.use('FR');
  }

  ngOnInit(): void {
    this.details=localStorage.getItem('user');
    this.userdata=JSON.parse(this.details)

    if(this.details==null)
    {
      this.DisplayErrorToastr("Session time out Please Login Again")
      this.router.navigate(['/login'])
    }
  }

  DisplayErrorToastr(message: any)
  {
    this.toastr.error(message);
  }

  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

  Logout()
  {
    localStorage.removeItem('user');
    this.router.navigate(['/'])
  }

}
