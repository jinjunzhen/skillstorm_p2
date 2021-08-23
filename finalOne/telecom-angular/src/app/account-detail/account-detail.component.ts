import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Account from '../models/Account';
import Plan from '../models/Plan';
import { TelecomService } from '../telecom.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})

export class AccountDetailComponent implements OnInit {
  account! : Account;
  planList! : Plan[];

  constructor(
    private service: TelecomService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnChanges() {
  }

  ngOnInit(): void {
    this.account = this.service.myAccount;
    console.log(this.account);
    this.planList = this.account.plan;
    // console.log(this.planList);

    
  }

}
