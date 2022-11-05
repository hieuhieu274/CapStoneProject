import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AuthGuard } from './pages/guard/auth.guard';
import { RegisterComponent } from './pages/register/register.component';
import { QuizComponent } from './pages/component/quiz/quiz.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, canActivate:[AuthGuard], children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'teacher', component: TeacherComponent },
      { path: 'student', component: StudentComponent }
    ]
  },
  { path: 'dashboard',canActivate:[AuthGuard] ,component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'quiz', component: QuizComponent},
  { path: '**', redirectTo:'login', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
