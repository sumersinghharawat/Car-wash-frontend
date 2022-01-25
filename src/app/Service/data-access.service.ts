import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  apiUrl: string = environment.url;
  public customer = new BehaviorSubject<any>(null);
  public category = new BehaviorSubject<any>(null);
  public service = new BehaviorSubject<any>(null);
  
  constructor(
    private httpClient: HttpClient
  ) { }

  public Get<T>(url:any): Observable<T>{
    return this.httpClient.get<T>(this.apiUrl + url);
  }

  public Post<T>(url:string, Data:any, option?:any):Observable<T>{
    return this.httpClient.post<T>(this.apiUrl + url, Data);
  }

  public Delete<T>(requestUrl: string): Observable<T> {
    return this.httpClient.delete<T>(this.apiUrl + requestUrl);
  }

}
