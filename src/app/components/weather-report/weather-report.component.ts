import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {

  public date="25 March, 2019";
  public day="Friday";
  public location="Sydney, Australia";
  public temp=32;
  public weather="cloudy"
  public sunday=30;
  public monday=31;
  public tuesday=28;
  public wednesday=30;
  public thursday=29
  public friday=31
  public saturday=32;

  public getlocation="";


  constructor() { }

  ngOnInit(): void {
  }

  Search()
  {
    
  }

}
