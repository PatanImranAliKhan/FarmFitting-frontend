import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorMessageService } from './http-error-message.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotebookService {

  public url: String = "http://localhost:8000";
  constructor(private http: HttpClient, private HttpErrorMsg: HttpErrorMessageService, private router: Router) { }

  getUser(user: String,pass: String): any
  {
    return this.http.get(`${this.url}/getuser/${user}/${pass}`)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }
  
}
