import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-soil-fertility-maps',
  templateUrl: './soil-fertility-maps.component.html',
  styleUrls: ['./soil-fertility-maps.component.css']
})
export class SoilFertilityMapsComponent implements OnInit {

  public states=['Andhra Pradesh','Assam','Bihar','Chattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Karnataka','Kerala','Madhya Pradesh',
                  'Maharastra','Orissa','Punjab','Rajasthan','Tamil Nadu','Uttar Pradesh','UttaraKhand','West Bengal']
  
  public urlnames = ['ANDHRAPRADESH','ASSAM','BIHAR','CHATTISGARH','GOA','GUJRAT','HARYANA','HIMACHALPRADESH','KARNATAKA','KERALA','MADHAYAPRADESH',
  'MAHARASHTRA','ORISSA','PUNJAB','RAJASTHAN','TAMILNADU','UTTARPRADESH','UTTARAKHAND','WESTBENGAL']

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  ClickFunction(state: any) : any
  {
    var index=0;
    for(let i=0;i<18;i++)
    {
      if(this.states[i]==state)
      {
        index=i;
        break;
      }
    }
    const stateurlname=this.urlnames[index];

    this.router.navigate([`/displaymaps/${stateurlname}`])

  }

}
