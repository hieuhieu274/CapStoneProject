import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  phone: string = ''
  email: string = ''
  role: boolean = false
  login!: boolean
  constructor(
    private authService:AuthService,
    private router: Router
    ) {
    
   
    
  }

  ngOnInit(): void {
    this.phone = '0135444291'
    this.email = 'demo@gmail.com'
    this.role = false
    this.login = true
    this.login = this.authService.isAuthenticated()
   
    
  }

  logout():void {
    window.localStorage.clear()
    location.reload()
  }

  routerPage(path:string){
    this.router.navigate([path])
  }

}
