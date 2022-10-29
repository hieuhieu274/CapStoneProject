import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url : string = 'http://localhost:8070/'
  constructor(
    private http: HttpClient
  ) { }

  login(username?:string, password?:string): Observable<any>{
    const url_login = this.url + `login?username=${username}&password=${password}`
    return this.http.get<any>(url_login)
  }
}
