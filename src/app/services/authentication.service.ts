import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorMessageService } from './http-error-message.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public url: String = "http://localhost:8000";
  constructor(private http: HttpClient, private HttpErrorMsg: HttpErrorMessageService, private router: Router) { }

  addUser(user: any): any
  {
    return this.http.post(`${this.url}/adduser`,user)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }
  
  deleteUser(user: any): any
  {
    return this.http.delete(`${this.url}/delete/${user}`)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }

  updateUser(user: any): any
  {
    return this.http.put(`${this.url}/update/${user.id}`,user)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }

  getUser(user: String,pass: String): any
  {
    return this.http.get(`${this.url}/getuser/${user}/${pass}`)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }

}
