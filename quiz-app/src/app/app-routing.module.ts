import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { QuizWindowComponent } from './components/quiz-window/quiz-window.component';
import { QuizService } from './services/quiz.service';

const routes: Routes = [
    { path: 'home', component: HeaderComponent },
    { path: 'quiz-window', component: QuizWindowComponent },
    { path: 'quiz-window/:subName', component: QuizWindowComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}