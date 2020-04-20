import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from '../models/quiz';
 
// const _baseUrl = '../../assets/data.json'
const _baseUrl = 'http://localhost:8000/api/quiz/'

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  // fetch all the quizes and there data
  fetchQuizes(): Observable<any> {
    return this.http.get(_baseUrl)
  }

  // fetch one quiz at a time
  fetchQuiz(subName: string): Observable<any> {
    return this.http.get(_baseUrl + subName)
  }
 
}
