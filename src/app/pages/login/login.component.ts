import { AlldataService } from './../../service/alldata.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private admin:AlldataService,private router:Router) { }

  ngOnInit() {
  }
  utilisateur= new FormGroup({
    username:new FormControl(''),
    password: new FormControl('')
  })
  addsys(donner){
    if (donner.username=="user" && donner.password=="user") {
      localStorage.setItem('token','welcome123');
      this.admin.isconnecter=true;
      this.router.navigate(['/'])
    }
    else{
      alert("login ou password incorrect")
    }
    
  }
}
