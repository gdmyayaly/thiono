import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlldataService {
  public cours=[
    {id:1,image:'assets/images/dev.png',titre:'INTRODUCTION DEVELOPPEMENT WEB',module:'2',heure:'3',niveau:'Débutant'},

    
  ];
  public isconnecter:boolean=false;
  constructor() { }
  cargementpage(){
    if (localStorage.getItem('token')) {
      this.isconnecter=true;
    }
  }
}
