import { Component, OnInit } from '@angular/core';
import { FetchContactsService } from '../services/fetch-contacts.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SentMessageDialogComponent } from '../sent-message-dialog/sent-message-dialog.component';

@Component({
  selector: 'app-sent-messages',
  templateUrl: './sent-messages.component.html',
  styleUrls: ['./sent-messages.component.css']
})
export class SentMessagesComponent implements OnInit {

  displayedColumns = ['index', 'firstname', 'lastname', 'date'];
  dataSource: MatTableDataSource<UserData>;
  data1: Object;

  constructor(private service: FetchContactsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.service.sentMessagesDetail().subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
    })
  }

  openDialog(row): void {
    console.log(row);

    const dialogRef = this.dialog.open(SentMessageDialogComponent, {
      width: '300px',
      height: '270px',
      disableClose: true,
      data: { firstname: row.firstname, lastname: row.lastname, contact: row.contact, message: row.message, date: row.date }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}


export interface UserData {
  _id: string,
  firstname: string;
  lastname: string;
  contact: string;
  message: string;
  date: string;
}

export interface DialogData {
  firstname: string;
  lastname: string;
  contact: number;
  message: string
}
