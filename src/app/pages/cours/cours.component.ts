import { AlldataService } from './../../service/alldata.service';
import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FiltremobileComponent } from '../filtremobile/filtremobile.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  constructor(public alldata:AlldataService,public dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
    // if (screen.width<=768) {
    //   alert("taille reduis")
    // }
  }
  // filtre(){
  //   alert("filtre")
  // }
  filtre(): void {
    const dialogRef = this.dialog.open(FiltremobileComponent, {
      width: '250px',
      data: {name: '', animal: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
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
