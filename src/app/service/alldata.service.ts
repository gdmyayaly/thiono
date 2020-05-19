import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlldataService {
  public cours=[
    {id:1,image:'assets/images/dev.png',titre:'INTRODUCTION DEVELOPPEMENT WEB',module:'2',heure:'3',niveau:'Débutant'},
  ];
  public modules=[
    {id:1,titre:'',chapitre:[]}
  ]
  public isconnecter:boolean=false;
  constructor() { }
  cargementpage(){
    if (localStorage.getItem('token')) {
      this.isconnecter=true;
    }
  }
  public rt=[
    {id:3,titre:'Parmi ces images lequel n\'est pas un navigateur web ?',image1:'assets/image/q1g.png',image2:'assets/image/q3b.png',image3:'assets/image/q3c.png',good:'Google Chrome',titre1:'Google Chrome',titre2:'Internet Explorer',titre3:'HTML 5',etat:'',youresponse:''},
  ]
}
