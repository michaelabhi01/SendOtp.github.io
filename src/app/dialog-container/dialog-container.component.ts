import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../contact-list/contact-list.component';
import { FetchContactsService } from '../services/fetch-contacts.service';

@Component({
  selector: 'app-dialog-container',
  templateUrl: './dialog-container.component.html',
  styleUrls: ['./dialog-container.component.css']
})
export class DialogContainerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogContainerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private service: FetchContactsService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendOtp(data): void {
    this.service.sendOtp(data).subscribe(test => {
    })
    this.dialogRef.close();
  }


}
