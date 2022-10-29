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
  constructor(private loginService: LoginService, private router: Router) {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
    this.phone = '0135444291';
    this.email = 'demo@gmail.com';
  }
  login(username?: string, password?: string) {
    if (username && password) {
      this.loginService
        .login(username, password)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          (response) => {
            if (response.status === 200) {
              localStorage.setItem('access_token', `${response.access_token}`);
              localStorage.setItem(
                'refresh_token',
                `${response.refresh_token}`
              );
              this.router.navigate(['home']);
            } else {
              alert(`Username or password is wrong`);
            }
          },
          (error) => {
            alert(`Error:  ${error.statusText}`);
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
