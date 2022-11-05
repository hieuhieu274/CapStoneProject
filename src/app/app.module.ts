import { NgModule, TemplateRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { CellCustomComponent } from './cell-custom/cell-custom.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
// import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HeaderComponent } from './pages/component/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { QuizComponent } from './pages/component/quiz/quiz.component';


@NgModule({
  declarations: [
    AppComponent,
    CellCustomComponent,
    DashboardComponent,
    HomeComponent,
    TeacherComponent,
    StudentComponent,
    HeaderComponent,
    RegisterComponent,
    QuizComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    AgGridModule.withComponents([]),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-left',
      preventDuplicates: false,
    })

  ],
  providers: [],
  entryComponents:[CellCustomComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
