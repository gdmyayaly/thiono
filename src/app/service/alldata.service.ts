import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlldataService {
  public cours=[
    {id:1,image:'assets/sitevitrine.png',titre:'Création de site vitrine simple',module:'8',heure:'30',niveau:'Débutant'},
    // {id:1,image:'assets/images/dev.png',titre:'Création de site dynamique',module:'8',heure:'30',niveau:'Intermediaire'},
    // {id:1,image:'assets/images/dev.png',titre:'Création de micro-application',module:'8',heure:'30',niveau:'Avancée'},

  ];
  public modules=[
    {id:1,titre:'',chapitre:[]}
  ]
  public langue: boolean;

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
