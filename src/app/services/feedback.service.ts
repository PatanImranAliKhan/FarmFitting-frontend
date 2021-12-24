import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorMessageService } from './http-error-message.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  public url: String = "http://localhost:2020/feedback";
  constructor(private http: HttpClient, private HttpErrorMsg: HttpErrorMessageService, private router: Router) { }

  addFeedbaackDetails(details: any): any
  {
    return this.http.post(`${this.url}/send`,details)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }

  getFeedbacks(): any
  {
    return this.http.get(`${this.url}/all`)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }
}
