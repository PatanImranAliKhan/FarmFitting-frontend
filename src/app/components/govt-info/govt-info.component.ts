import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-govt-info',
  templateUrl: './govt-info.component.html',
  styleUrls: ['./govt-info.component.css']
})
export class GovtInfoComponent implements OnInit {

  public searchdata="";
  public selecttype="Fertilizers";
  public states=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",];
  public regions=[[]];
  constructor() { }

  ngOnInit(): void {
  }

  Search()
  {
    
  }

}
