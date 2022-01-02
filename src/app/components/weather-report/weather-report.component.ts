import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

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
  public temperature=0;
  public pressure=0;
  public humidity=0;
  public windspeed=0;
  public temppercent=0;
  public pressurepercent=0;
  public humiditypercent=0;
  public windpercent=0;


  public getlocation="";


  constructor(private weatherservice: WeatherService) { }

  ngOnInit(): void {
    this.weatherservice.getData("Mangalagiri")
    .subscribe((data: any) => {
      console.log(data);
      this.temperature=data.main.temp;
      this.pressure=data.main.pressure;
      this.humidity=data.main.humidity;
      this.windspeed=data.wind.speed;
      this.checkPercent();
    })
  }

  Search()
  {
    console.log(this.getlocation);
    this.weatherservice.getData(this.getlocation)
    .subscribe((data: any) => {
      console.log(data);
      this.temperature=data.main.temp;
      this.pressure=data.main.pressure;
      this.humidity=data.main.humidity;
      this.windspeed=data.wind.speed;
      this.checkPercent();
    })
  }

  checkPercent()
  {
    this.windpercent=this.windspeed*100/12;

    this.pressurepercent=this.pressure*100/1034;

    this.humiditypercent=this.humidity;

    this.temppercent=this.temperature*100/97.7;
  }

}
