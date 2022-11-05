import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  public indexQuestion: number;
  public questions: any;
  public lenQuestion?: number;
  public listPoint: any = [];
  public nextstatus = false;
  public time :any
  constructor(private quizService: QuizService) {
    this.indexQuestion = 0;
    this.questions = this.quizService.getQuiz();
  }

  ngOnInit(): void {
    this.startTime()
  }

  back(): any {
    if (this.indexQuestion > 0) {
      this.indexQuestion -= 1;
      this.nextstatus = false;
    }
  }

  next(indexQuestion: any, A: any, B: any, C: any, D: any): any {
    console.log(this.questions);

    const correct = this.questions[indexQuestion].correct;
    if (A.checked) {
      this.updateDataListQuestionStatus(A, indexQuestion);
    } else if (B.checked) {
      this.updateDataListQuestionStatus(B, indexQuestion);
    } else if (C.checked) {
      this.updateDataListQuestionStatus(C, indexQuestion);
    } else if (D.checked) {
      this.updateDataListQuestionStatus(D, indexQuestion);
    } else {
      alert('chưa chọn câu trả lời');
    }
  }

  updateArray(array: any, indexQuestion: number, status: boolean) {
    array[indexQuestion] = {
      id: this.questions[indexQuestion].id,
      acaId: this.questions[indexQuestion].acaId,
      levelId: this.questions[indexQuestion].levelId,
      question: this.questions[indexQuestion].question,
      answerA: this.questions[indexQuestion].answerA,
      answerB: this.questions[indexQuestion].answerB,
      answerC: this.questions[indexQuestion].answerC,
      answerD: this.questions[indexQuestion].answerD,
      correct: this.questions[indexQuestion].correct,
      createAt: this.questions[indexQuestion].createAt,
      updateAt: this.questions[indexQuestion].updateAt,
      status_choose: status,
    };
  }

  updateDataListQuestionStatus(name: any, indexQuestion: any) {
    const correct = this.questions[indexQuestion].correct;
    const status = name.value === correct ? true : false;
    this.updateArray(this.questions, indexQuestion, status);
    if (this.indexQuestion !== this.questions.length - 1) {
      this.indexQuestion += 1;
      name.checked = false;
    } else {
      this.nextstatus = true;
    }
  }

  startTime():any {
    let h = 0; // Giờ
    let m = 2; // Phút
    let s = 59; // Giây
    setInterval(()=>{
      s -= 1
      if(s<0){
        m-=1
        s = 59
        if(m<0){
          h-=1
          m=59
          if(h<0){
            alert('Hết giờ')
            window.location.reload()
          }
        }
      }
      this.time = `${h} giờ ${m} phút ${s} giây`


    },1000)

  }
}
