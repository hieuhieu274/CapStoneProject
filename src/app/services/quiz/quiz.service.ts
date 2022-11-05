import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  data?: any = [
    {
      id:1,
      acaId:2,
      levelId:1,
      question: 'Hello ______________?',
      answerA: 'Nam',
      answerB: '123',
      answerC:'3',
      answerD:'a3',
      correct:'Nam',
      createAt:null,
      updateAt:null
    },
    {
      id:2,
      acaId:2,
      levelId:1,
      question: 'Hi ______________?',
      answerA: '1111',
      answerB: 'Chi',
      answerC:'1',
      answerD:'1',
      correct:'Chi',
      createAt:null,
      updateAt:null
    },
    {
      id:3,
      acaId:2,
      levelId:1,
      question: 'con den  ______________?',
      answerA: 'roi',
      answerB: 'ha',
      answerC:'a',
      answerD:'a',
      correct:'roi',
      createAt:null,
      updateAt:null
    },

  ]
  constructor() { }
  getQuiz():any {
    return this.data
  }

}
