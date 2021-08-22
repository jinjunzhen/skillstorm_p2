import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Account from '../models/Account';
import { TelecomService } from '../telecom.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
  @Input('inHome') aid!: number;
  account!: Account;
  planSize!: number;

  constructor(
    private service: TelecomService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.service.findAccountById(this.aid).subscribe((data: Account) => {
      this.account = data;
      this.planSize = data.plan.length;
      console.log(this.account);
    })
  }

}
