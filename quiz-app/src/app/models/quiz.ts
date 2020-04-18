import { Question } from './question';

export interface Quiz {
    quizId: number
    subName: string
    questions: Question[]
}