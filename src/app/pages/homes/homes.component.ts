import { Component, OnInit } from '@angular/core';
import { AlldataService } from 'src/app/service/alldata.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {

  constructor(private langue:AlldataService) { }

  ngOnInit(): void {
    this.langue.langue=true;
  }

}
