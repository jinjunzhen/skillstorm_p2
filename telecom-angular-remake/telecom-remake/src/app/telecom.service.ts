import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Account from './models/Account';
import { Observable } from 'rxjs';
import Plan from './models/Plan';
import Phone from './models/Phone';

@Injectable({
  providedIn: 'root'
})
export class TelecomService {

  phone_url = 'http://localhost:9001/phones/phone';
  account_url = 'http://localhost:9001/accounts/account';
  plan_url = 'http://localhost:9001/plans/plan';
  getOneAccount_url = 'http://localhost:9001/accounts/login';
  putPlanToAcct_url_1=  'http://localhost:9001/plans/';
  putPlanToAcct_url_2=  '/addPlan/';
  test_url = "http://localhost:9001/phones/2/addPhone/1";
  temp_url = "";
  putPhoneToPlan_url_1 = "http://localhost:9001/phones/";
  putPhoneToPlan_url_2 = "/addPhone/";

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

  fetchAccountById(aid: number):Observable<Account> {
    return this.httpClient.get<Account>(this.account_url+'/'+aid);
  }

  savePlan(plan: Plan): Observable<Plan> {
    return this.httpClient.post<Plan>(this.plan_url, plan);
  }

  connectPlanToAcct(plan_id: number, acc_id: number): void{
    this.temp_url = this.putPlanToAcct_url_1 + plan_id + this.putPlanToAcct_url_2 + acc_id;
    // console.log(this.temp_url);
    // console.log(this.test_url);
    this.httpClient.put(this.temp_url, null).subscribe();
  }

  connectPhoneToPlan(phone_id: number, plan_id: number): void{
    this.temp_url = this.putPhoneToPlan_url_1 + phone_id + this.putPhoneToPlan_url_2 + plan_id;
    console.log(this.temp_url);
    this.httpClient.put(this.temp_url, null).subscribe();
  }

  deletePlan(plan_id: number): Observable<any>{
    return this.httpClient.delete(this.plan_url + "/" + plan_id);
  }

  deletePhone(phone_id: number): Observable<any> {
    return this.httpClient.delete(this.phone_url + "/" + phone_id);
  }
  
}
