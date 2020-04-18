import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
const _baseUrl = '../../assets/data.json'

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  // fetch all the quizes and there data
  fetchQuizes(): Observable<any> {
    return this.http.get(_baseUrl)
  }

  // fetch one quiz by its id
}
