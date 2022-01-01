import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorMessageService } from './http-error-message.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public url: String = "http://ec2-34-205-156-27.compute-1.amazonaws.com:2020";
  constructor(private http: HttpClient, private HttpErrorMsg: HttpErrorMessageService, private router: Router) { }

  addUser(user: any): any
  {
    return this.http.post(`${this.url}/user/add`,user)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }
  
  deleteUser(email: any): any
  {
    return this.http.delete(`${this.url}/user/delete/${email}`)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }

  updateUser(user: any): any
  {
    return this.http.put(`${this.url}/user/update`,user)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }

  getUser(email: String,pass: String): any
  {
    return this.http.get(`${this.url}/user/login/${email}/${pass}`)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }

  findUser(email: String): any
  {
    return this.http.get(`${this.url}/user/getdetails/${email}`)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }

}
