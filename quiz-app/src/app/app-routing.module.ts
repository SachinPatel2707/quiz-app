import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { QuizWindowComponent } from './components/quiz-window/quiz-window.component';

const routes: Routes = [
    { path: 'home', component: HeaderComponent },
    { path: 'quiz-window', component: QuizWindowComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}