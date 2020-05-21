import { LoginComponent } from './pages/login/login.component';
import { OnecourComponent } from './pages/onecour/onecour.component';
import { CoursComponent } from './pages/cours/cours.component';
import { HomesComponent } from './pages/homes/homes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LessonComponent } from './pages/lesson/lesson.component';
import { QuizzComponent } from './pages/quizz/quizz.component';


const routes: Routes = [
  {path:'',component:HomesComponent},
  {path:'cours',component:CoursComponent},
  {path:'onecour',component:OnecourComponent},
  {path:'login',component:LoginComponent},
  {path:'lesson',component:LessonComponent},
  {path:'quizz',component:QuizzComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
