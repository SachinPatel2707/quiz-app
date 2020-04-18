import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
