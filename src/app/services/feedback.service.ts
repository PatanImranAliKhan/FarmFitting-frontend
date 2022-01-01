import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorMessageService } from './http-error-message.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  public url: String = "http://ec2-34-205-156-27.compute-1.amazonaws.com:2020";
  constructor(private http: HttpClient, private HttpErrorMsg: HttpErrorMessageService, private router: Router) { }

  addFeedbaackDetails(details: any): any
  {
    return this.http.post(`${this.url}/query/send`,details)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }

  getFeedbacks(): any
  {
    return this.http.get(`${this.url}/query/all`)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }
}
