import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(
    private http: HttpClient
  ) { }
  getQuiz():Observable<any> {
    const url ='http://localhost:8070/api/aca/get_quiz/1'
    return this.http.post<any>(url,{})
  }

}
