import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatRippleModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatSortModule } from '@angular/material/sort';
import { CdkTableModule } from '@angular/cdk/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { HomeComponent } from './home/home.component';
import { SentMessagesComponent } from './sent-messages/sent-messages.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DialogContainerComponent } from './dialog-container/dialog-container.component';
import { SentMessageDialogComponent } from './sent-message-dialog/sent-message-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactListComponent,
    HomeComponent,
    SentMessagesComponent,
    DialogContainerComponent,
    SentMessageDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  exports: [CdkTableModule
  ],
  entryComponents: [DialogContainerComponent, SentMessageDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
