import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { CropInfoService } from '../../services/crop-info.service';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-crop-info',
  templateUrl: './crop-info.component.html',
  styleUrls: ['./crop-info.component.css']
})
export class CropInfoComponent implements OnInit {

  public searchdata="";
  public responses=[];
  public showpaginator=false;
  public title="Crop Cultivation";
  public selectdata: any="Cultivation";
  public url="https://www.youtube.com/embed/s-mreQn8RHM";
  public options=['Potato Cultivation','Tomato Cultivation','Brinjal Cultivation','','','','','','','','','','','',
  '','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];

  totalresponses=30;
  page: number = 1;

  public videolink: any;

  constructor(private cropinfoservice: CropInfoService, private dom: DomSanitizer) {

  }

  ngOnInit(): void {
    this.videolink=this.dom.bypassSecurityTrustResourceUrl(this.url);
    this.getRandomData();
  }

  getRandomData()
  {
    this.cropinfoservice.getYoutubeSearchData("cultivation of crops")
    .subscribe((data: any) => {
      this.responses=data.items;
      console.log(data);
      this.showpaginator=true
    })
  }

  Search()
  {
    if(this.searchdata!="")
    {
      this.title=this.searchdata + " cultivation";
      this.cropinfoservice.getYoutubeSearchData(this.searchdata + " cultivation")
      .subscribe((data: any) => {
        this.responses=data.items;
      })
    }
    else
    {
      this.getRandomData();
    }
  }


  VideoSelect(ind: any)
  {
    var abc: number=5*(this.page-1);
    abc+=ind;
    
    const con: any=this.responses[abc];
    
    this.url="https://www.youtube.com/embed/"+con.id.videoId
    this.videolink=this.dom.bypassSecurityTrustResourceUrl(this.url);
    // console.log(this.videolink);
    
  }

}
