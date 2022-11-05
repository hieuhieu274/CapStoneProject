import {
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  phone: string = '';
  email: string = '';
  username?: string;
  check: boolean = false;
  destroy$ = new Subject();
  submit !: boolean
  constructor(private loginService: LoginService, private router: Router) {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      this.router.navigate(['/home']);
    }
    this.submit = false
  }

  ngOnInit(): void {
    this.phone = '0135444291';
    this.email = 'demo@gmail.com';
  }
  login(username?: string, password?: string) {
    this.submit = true  
    if (username && password) {
      this.loginService
        .login(username, password)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          (response) => {
            if (response.access_token && response.refresh_token) {
              localStorage.setItem('access_token', `${response.access_token}`);
              localStorage.setItem(
                'refresh_token',
                `${response.refresh_token}`
              );
              this.router.navigate(['home']);
              location.reload();
              this.submit = false
            } else {
              alert(`Username or password is wrong`);
              this.submit = false
            }
          },
          (error) => {
            alert(`Error API: ${error?.statusText} or Username || password is wrong `)
            location.reload();
            this.submit = false
          }
        );
    } else {
      alert('Username and password is require');
    }
    localStorage.setItem('check', `${this.check}`);
  }
  checkCheckBoxvalue(event?: any) {
    this.check = event.target.checked;
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
