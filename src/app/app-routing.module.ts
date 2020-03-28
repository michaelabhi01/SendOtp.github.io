import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SentMessagesComponent } from './sent-messages/sent-messages.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contacts', component: ContactListComponent },
  { path: 'sentMessages', component: SentMessagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
