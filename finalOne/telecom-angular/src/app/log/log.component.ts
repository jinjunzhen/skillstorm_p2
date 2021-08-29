import { Component, OnInit } from '@angular/core';
import Account from '../models/Account';
import { TelecomService } from '../telecom.service';
import { Emitters } from '../emitters/emitters';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import Plan from '../models/Plan';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})

export class LogComponent implements OnInit {
  accountToLogin = new Account();
  account_id! : number;
  planList! : Plan[];

  constructor(
    private service: TelecomService,
    private router: Router,
    private route: ActivatedRoute,) {
  }

  logInAccount(): void {
    this.service.logInAccount(this.accountToLogin).subscribe(data => {
      this.accountToLogin = data;
      this.account_id = data.account_id
      this.router.navigate(['home/']);
      this.service.myAccount = this.accountToLogin;
      this.planList = this.accountToLogin.plan;
      
    }, err => {

    });
  }

  ngOnInit(): void {
  }

}
