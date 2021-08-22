import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Account from './models/Account';
import Phone from './models/Phone';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelecomService {

  phone_url = 'http://localhost:9001/phones/phone';
  account_url = 'http://localhost:9001/accounts/account';
  getOneAccount_url = 'http://localhost:9001/accounts/getOneAccount';
  myAccount!: Account;

  constructor(private httpClient: HttpClient) { }

  findAllPhone(): Observable<Phone[]> {
    return this.httpClient.get<Phone[]>(this.phone_url);
  }

  findAllAccount(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(this.account_url);
  }

  savePhone(phone: Phone): Observable<Phone> {
    return this.httpClient.post<Phone>(this.phone_url, phone);
  }

  saveAccount(account: Account): Observable<Account> {
    return this.httpClient.post<Account>(this.account_url, account);
  }

  logInAccount(account: Account): Observable<Account> {
    return this.httpClient.post<Account>(this.getOneAccount_url, account);
  }

  findAccountById(aid: number):Observable<Account> {
    return this.httpClient.get<Account>(this.account_url+'/'+aid);
  }
}
