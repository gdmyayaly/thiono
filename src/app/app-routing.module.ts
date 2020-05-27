import { LoginComponent } from './pages/login/login.component';
import { OnecourComponent } from './pages/onecour/onecour.component';
import { CoursComponent } from './pages/cours/cours.component';
import { HomesComponent } from './pages/homes/homes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LessonComponent } from './pages/lesson/lesson.component';
import { QuizzComponent } from './pages/quizz/quizz.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { PlanformationComponent } from './pages/planformation/planformation.component';


const routes: Routes = [
  {path:'',component:AcceuilComponent},
  {path:'cours',component:CoursComponent},
  {path:'home',component:HomesComponent},
  {path:'planformation',component:PlanformationComponent},
  {path:'onecour',component:OnecourComponent},
  {path:'login',component:LoginComponent},
  {path:'lesson',component:LessonComponent},
  {path:'quizz',component:QuizzComponent},
  {path:'accueil',component:AcceuilComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
