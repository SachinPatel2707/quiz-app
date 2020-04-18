import { Choice } from "./choice";

export interface Question {
    quesId: number
    quesText: string
    choices: Choice[]
}