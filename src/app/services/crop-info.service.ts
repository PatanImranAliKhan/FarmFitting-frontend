import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorMessageService } from './http-error-message.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CropInfoService {

  public url: String =`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=30`;
  constructor(private http: HttpClient, private HttpErrorMsg: HttpErrorMessageService, private router: Router) { }

  getYoutubeSearchData(searchdata :any):any{
    return this.http.get(`${this.url}&q=${searchdata}&key=AIzaSyAXVfCImeZ3svarjC-DmS9mpBLbKgoX2aM`)
    .pipe(catchError(this.HttpErrorMsg.handleError));
  }
  
}
