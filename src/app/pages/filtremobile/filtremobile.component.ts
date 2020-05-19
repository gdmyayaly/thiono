import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-filtremobile',
  templateUrl: './filtremobile.component.html',
  styleUrls: ['./filtremobile.component.css']
})
export class FiltremobileComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FiltremobileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
  }
  soumettre(): void {
    this.dialogRef.close();
  }
}
