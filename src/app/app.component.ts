import { AlldataService } from './service/alldata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Front';
  constructor(private admin:AlldataService){}
  ngOnInit(){
    this.admin.cargementpage();

  }
}
