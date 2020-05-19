import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlldataService {
  public cours=[
    {id:1,image:'assets/images/formation.png',titre:'Formation 1',module:'5',heure:'3',niveau:'Débutant'},
    {id:2,image:'assets/images/formation.png',titre:'Formation 2',module:'5',heure:'3',niveau:'Débutant'},
    {id:3,image:'assets/images/formation.png',titre:'Formation 3',module:'5',heure:'3',niveau:'Difficile'},
    {id:4,image:'assets/images/formation.png',titre:'Formation 4',module:'5',heure:'3',niveau:'Débutant'},
    {id:5,image:'assets/images/formation.png',titre:'Formation 5',module:'5',heure:'3',niveau:'Intermédiaire'},
    {id:6,image:'assets/images/formation.png',titre:'Formation 6',module:'5',heure:'3',niveau:'Débutant'},
    {id:7,image:'assets/images/formation.png',titre:'Formation 7',module:'5',heure:'3',niveau:'Difficile'},
    {id:8,image:'assets/images/formation.png',titre:'Formation 8',module:'5',heure:'3',niveau:'Débutant'},
    {id:9,image:'assets/images/formation.png',titre:'Formation 9',module:'5',heure:'3',niveau:'Intermédiaire'},
  ];
  public isconnecter:boolean=false;
  constructor() { }
  cargementpage(){
    if (localStorage.getItem('token')) {
      this.isconnecter=true;
    }
  }
}
