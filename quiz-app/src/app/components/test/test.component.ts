import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

import { Quiz } from '../../models/quiz';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // dummy data
  quizes: Quiz[] = []
  quizId: number = 1
  currentQues: number = 1

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    // this.quizService.fetchQuiz("Physics")
    // .subscribe((data: Quiz[]) => {
    //   this.quizes = data
    //   console.log(data)
    // })
  }
}
