import { Component, OnInit } from '@angular/core';
import './translate.js'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public languages = [['English','EN'], ['French','FR'], ['Belgium','BG']];

  constructor(private translate: TranslateService) { 
    
    translate.setDefaultLang('en');
    // const browserlang=translate.getBrowserLang();
    // translate.use(browserlang?browserlang:'en');
    // translate.use('FR');
  }

  ngOnInit(): void {
  }

  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

}
