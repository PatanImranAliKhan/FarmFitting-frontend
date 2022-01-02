import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorMessageService } from './http-error-message.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public url: String = "http://ec2-34-205-156-27.compute-1.amazonaws.com:2020";
  constructor(private http: HttpClient, private HttpErrorMsg: HttpErrorMessageService, private router: Router) { }

  getCities(city:any):any{
    // http://localhost:2020/user/weather/find_city/Vijayawada
    return this.http.get(`${this.url}/user/weather/find_city/${city}`)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }

  getData(city:any):any{
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96e27da4f61bebe5c6e5c7c18c453252&units=imperial`)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }

  dailyForecast(cityid:any):any{
    return this.http.get(`${this.url}/user/weather/city/daily_report/${cityid}`)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }

  fivedayForecast(cityid:any):any{
    return this.http.get(`${this.url}/user/weather/city/5days_report/${cityid}`)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }

  twelveHourForecast(cityid:any):any{
    return this.http.get(`${this.url}/user/weather/city/12hour_report/${cityid}`)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }

  currentCondition(cityid:any):any{
    return this.http.get(`${this.url}/user/weather/city/currentcondition/${cityid}`)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }
}
