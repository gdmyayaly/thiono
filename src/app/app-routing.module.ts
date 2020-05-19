import { LoginComponent } from './pages/login/login.component';
import { OnecourComponent } from './pages/onecour/onecour.component';
import { CoursComponent } from './pages/cours/cours.component';
import { HomesComponent } from './pages/homes/homes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LessonComponent } from './pages/lesson/lesson.component';


const routes: Routes = [
  {path:'',component:HomesComponent},
  {path:'cours',component:CoursComponent},
  {path:'onecours',component:OnecourComponent},
  {path:'login',component:LoginComponent},
  {path:'lesson',component:LessonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
