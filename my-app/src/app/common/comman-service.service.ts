import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './common.model';

@Injectable({
  providedIn: 'root'
})
export class CommanServiceService {

 
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // dummy API

  constructor( private http: HttpClient) { }



  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.apiUrl);
  }

}
