import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  constructor() { }
  isAuthenticated(){
    const access_token = localStorage.getItem('access_token')
    if(access_token){
      return true
    }
    return this.isLoggedIn;
  }
}
