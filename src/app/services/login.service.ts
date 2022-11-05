import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = 'http://localhost:8070/'
  constructor(
    private http: HttpClient
  ) { }

  login(username?: string, password?: string): Observable<any> {
    const header = new HttpHeaders()
      .set('Content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Credentials', 'true')
      .set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
      .set("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization")
    const body = {
      username: username,
      password: password
    }
    const url_login = this.url + `api/login?username=${username}&password=${password}`
    return this.http.post<any>(url_login, {},{headers:header})
  }
}
