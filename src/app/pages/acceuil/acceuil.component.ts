import { Component, OnInit } from '@angular/core';
import { AlldataService } from 'src/app/service/alldata.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})


export class AcceuilComponent implements OnInit {

  constructor(private langue:AlldataService) { }

  ngOnInit(): void {
    this.langue.langue=false;
  }

}
