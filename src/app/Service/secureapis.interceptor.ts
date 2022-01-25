import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SecureapisInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req:any, next:any) {
    // console.log(localStorage.getItem("token"))
    let reqWithToken = req.clone({
      setHeaders: {
        Authorization: '' + localStorage.getItem("token")
      }
    })
    return next.handle(reqWithToken)
  }
}
