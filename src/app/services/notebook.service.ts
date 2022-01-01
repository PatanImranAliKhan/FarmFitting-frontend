import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorMessageService } from './http-error-message.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotebookService {

  public url: String = "http://ec2-34-205-156-27.compute-1.amazonaws.com:2020";
  constructor(private http: HttpClient, private HttpErrorMsg: HttpErrorMessageService, private router: Router) { }

  addFinance(finance:any): any
  {
    return this.http.post(`${this.url}/user/finance/add/`,finance)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }
  getFinance(email:string): any
  {
    return this.http.get(`${this.url}/user/finance/${email}/all`)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }

  getFinanceByType(email:string, type: String): any
  {
    return this.http.get(`${this.url}/user/getfinance/${email}/${type}`)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }

  updateFinance(finance: any): any
  {
    return this.http.put(`${this.url}/user/updatefinance`,finance)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }

  deleteRecord(id:any): any
  {
    return this.http.delete(`${this.url}/user/finance/delete/record/${id}`)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }
  
}
