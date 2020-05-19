import { AlldataService } from './../../service/alldata.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public user:AlldataService) { }

  ngOnInit(): void {
    this.showmenu();
  }
  showmenu(){
    $(document).ready(function(){
      $('.menu-toggle').click(function(){
        $('nav').toggleClass('active')
      })
    })
  }
  logout(){
    localStorage.removeItem('token')
    this.user.isconnecter=false;
  }
}
