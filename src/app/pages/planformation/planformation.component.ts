import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { AlldataService } from './../../service/alldata.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-planformation',
  templateUrl: './planformation.component.html',
  styleUrls: ['./planformation.component.css']
})
export class PlanformationComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder, public alldata:AlldataService, private router:Router) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  choice(){
    
    if (localStorage.getItem('token')) {
      this.router.navigate(['/onecour']);
    }
    else{
      this.router.navigate(['login'])
    }
  }
}
