import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';
import { QuesTile } from  '../../models/quesTile';
import { Choice } from 'src/app/models/choice';

@Component({
  selector: 'app-quiz-window',
  templateUrl: './quiz-window.component.html',
  styleUrls: ['./quiz-window.component.css']
})
export class QuizWindowComponent implements OnInit {

  quiz: Quiz
  // quizes: Quiz[]
  tiles: QuesTile[] = []
  response: boolean[] = []
  result: number = 0
  currentQues: number = 0

  constructor(private quizService: QuizService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.quizService.fetchQuizes()
    // .subscribe((data: Quiz[]) => {
    //   this.quizes = data
      
    //   this.getQuiz()

    // })
    let subName: string = this.route.snapshot.paramMap.get('subName')
    this.quizService.fetchQuiz(subName)
    .subscribe((res: Quiz) => {
      this.quiz = res
      this.getQuiz()
    })
  }

  getQuiz(): void {
    

    // this.quizes.forEach(quiz => {
    //   if(quiz.subName == subName) {
    //     this.quiz = quiz
    //     console.log(this.quiz)
    //   }
    // })

    for(let i = 0; i < this.quiz.questions.length; i++) {
      this.tiles.push(new QuesTile(false, false))
      this.response.push(false)
    }

    this.tiles[0].isCurrent = true

    // console.log(this.tiles)
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

  radioChangeHandler(choice: Choice) {
    if (choice.answer == true) {
      this.response[this.currentQues] = true      
    } else if (choice.answer == false) {
      this.response[this.currentQues] = false
    }
    console.log(this.response)
  }

  onSubmit() {
    this.response.forEach(res => {
      if (res == true) {
        this.result += 1
      }
    })

    this.router.navigate(['/result', this.result, this.quiz.questions.length])    
  }
}
