import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  public isgame:boolean=true;
  public data=[
    {id:1,titre:'C\'est quoi Internet ?',image1:'assets/image/q1c.png',image2:'assets/image/q1b.png',image3:'assets/image/q1a.png',good:'Un réseau mondial permettant de connecter tous les ordinateurs entre',titre1:'Un réseau téléphonique permettant de relier les personnes',titre2:'Un réseau mondial permettant de connecter tous les ordinateurs entre',titre3:'un réseau mobile',etat:'',youresponse:''},
    {id:2,titre:'C\'est quoi un navigateur web ?',image1:'assets/image/q2a.png',image2:'assets/image/q1g.png',image3:'assets/image/q2b.png',good:'Un logiciel qui permet d\'aller sur Internet',titre1:'Un périphérique pour Internet',titre2:'Un logiciel qui permet d\'aller sur Internet',titre3:'Une personne qui nous assiste sur Internet',etat:'',youresponse:''},
    // {id:3,titre:'Parmi ces images lequel n\'est pas un navigateur web ?',image1:'assets/image/q1g.png',image2:'assets/image/q3b.png',image3:'assets/image/q3c.png',good:'Google Chrome',titre1:'Google Chrome',titre2:'Internet Explorer',titre3:'HTML 5',etat:'',youresponse:''},
  ]
  public question={id:1,titre:'C\'est quoi Internet ?',image1:'assets/image/q1c.png',image2:'assets/image/q1b.png',image3:'assets/image/q1a.png',good:'Un réseau mondial permettant de connecter tous les ordinateurs entre',titre1:'Un réseau téléphonique permettant de relier les personnes',titre2:'Un réseau mondial permettant de connecter tous les ordinateurs entre',titre3:'un réseau mobile',etat:'',youresponse:''};
  public tab=1;
  public compte=0;
  constructor() { }

  ngOnInit() {
  }
rep(titre){
  console.log(titre);
  
  this.data[this.tab-1].etat='faux';
  this.data[this.tab-1].youresponse=titre;
  if (this.question.good==titre) {
    this.compte++;
    this.data[this.tab-1].etat='vrai';
  }
  if (this.tab<2) {
  this.question=this.data[this.tab];
  this.tab++
  }
  else{
    this.isgame=false;
    console.log(this.data);
  }
}
}
