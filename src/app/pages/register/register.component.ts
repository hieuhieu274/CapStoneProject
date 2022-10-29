import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  check: any;

  constructor() { }

  ngOnInit(): void {
  }
  login(username?: string, password?: string) {}
  checkCheckBoxvalue(event?: any) {
    this.check = event.target.checked;
  }
}
