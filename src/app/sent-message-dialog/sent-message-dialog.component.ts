import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../contact-list/contact-list.component';

@Component({
  selector: 'app-sent-message-dialog',
  templateUrl: './sent-message-dialog.component.html',
  styleUrls: ['./sent-message-dialog.component.css']
})
export class SentMessageDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SentMessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
