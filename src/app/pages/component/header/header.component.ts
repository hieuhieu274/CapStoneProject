import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  phone: string = ''
  email: string = ''
  role: boolean = false
  login: boolean = false
  constructor() { }

  ngOnInit(): void {
    this.phone = '0135444291'
    this.email = 'demo@gmail.com'
    this.role = false
    this.login = true
  }

}
