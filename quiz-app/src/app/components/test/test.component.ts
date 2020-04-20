import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';
import { QuesTile } from  '../../models/quesTile';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // dummy data
  quiz: Quiz
  quizes: Quiz[]
  tiles: QuesTile[] = []
  currentQues: number = 0

  constructor(private quizService: QuizService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.quizService.fetchQuizes()
    .subscribe((data: Quiz[]) => {
      this.quizes = data
      
      this.getQuiz()

    })
  }

  getQuiz(): void {
    let subName: string = this.route.snapshot.paramMap.get('subName')

    this.quizes.forEach(quiz => {
      if(quiz.subName == subName) {
        this.quiz = quiz
      }
    })

    for(let i = 0; i < this.quiz.questions.length; i++) {
      this.tiles.push(new QuesTile(false, false))
    }

    this.tiles[0].isCurrent = true

    console.log(this.tiles)
  }

  prevQues() {
    if(this.currentQues > 0) {
      this.tiles[this.currentQues].isCurrent = false
      this.currentQues -= 1
      this.tiles[this.currentQues].isCurrent = true
    }
  }

  nextQues() {
    if(this.currentQues < this.quiz.questions.length-1) {
      this.tiles[this.currentQues].isCurrent = false
      this.currentQues += 1
      this.tiles[this.currentQues].isCurrent = true
    }
  }

  tileAccess(index: number) {
    this.tiles[this.currentQues].isCurrent = false
    this.currentQues = index
    this.tiles[this.currentQues].isCurrent = true
  }
}
