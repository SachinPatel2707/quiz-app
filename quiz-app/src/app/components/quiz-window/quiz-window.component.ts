import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-window',
  templateUrl: './quiz-window.component.html',
  styleUrls: ['./quiz-window.component.css']
})
export class QuizWindowComponent implements OnInit {

  // dummy data
  quizes: Quiz[] = []
  quizId: number = 1
  currentQues: number = 1

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.fetchQuizes()
    .subscribe((data: Quiz[]) => {
      this.quizes = data
      console.log(data)
    })
  }
}
