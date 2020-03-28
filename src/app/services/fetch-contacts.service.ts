import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_SERVER = "http://localhost:5000";


@Injectable({
  providedIn: 'root'
})
export class FetchContactsService {

  constructor(private http: HttpClient) { }

  fetchContacts(): Observable<any> {
    // return this.http.get(AUTH_SERVER + '/contacts');
    return this.http.get('https://finalllllllllll.herokuapp.com/contacts');
  }

  sendOtp(data): Observable<any> {
    // console.log(data);
    // return this.http.post(AUTH_SERVER + '/sendOtp', data);
    return this.http.post('https://finalllllllllll.herokuapp.com/sendOtp', data);
  }

  sentMessagesDetail(): Observable<any> {
    // return this.http.get(AUTH_SERVER + '/sentMessages');
    return this.http.get('https://finalllllllllll.herokuapp.com/sentMessages');
  }

}
