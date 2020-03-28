import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FetchContactsService } from '../services/fetch-contacts.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogContainerComponent } from '../dialog-container/dialog-container.component';

// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  displayedColumns = ['index', 'firstname', 'lastname'];
  dataSource: MatTableDataSource<UserData>;

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor(private contactsService: FetchContactsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.contactsService.fetchContacts().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      // this.dataSource.sort = this.sort;
      // this.dataSource.paginator = this.paginator;
      console.log(this.dataSource.data);
    })
  }

  openDialog(row): void {
    var OTP = Math.floor(100000 + Math.random() * 900000);
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
      + (currentdate.getMonth() + 1) + "/"
      + currentdate.getFullYear() + ", "
      + currentdate.getHours() + ":"
      + currentdate.getMinutes() + ":"
      + currentdate.getSeconds();
    const dialogRef = this.dialog.open(DialogContainerComponent, {
      width: '250px',
      height: '225px',
      disableClose: true,
      data: { firstname: row.firstname, lastname: row.lastname, contact: row.contact, message: "Hi, Your OTP is " + OTP, date: datetime }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  test(): void {
    console.log("here");
  }
}

export interface UserData {
  firstname: string;
  lastname: string;
  contact: number;
}

export interface DialogData {
  firstname: string;
  lastname: string;
  contact: number;
  message: string;
  date: string

}
