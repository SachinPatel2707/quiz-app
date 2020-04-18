import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

import { Quiz } from '../../models/quiz';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  quizes: Quiz[] = []

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.fetchQuizes()
    .subscribe((data: Quiz[]) => {
      this.quizes = data
      console.log(data)
    })
  }

}
