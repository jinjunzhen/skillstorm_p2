import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Account from '../models/Account';
import { TelecomService } from '../telecom.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  constructor(
    private service: TelecomService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  accountList! : Account[];
  
  ngOnInit(): void {
    this.service.findAllAccount().subscribe((data) => {
      this.accountList = data;
      console.log(this.accountList);
    })
  }
}

export class NgIfSimple {
  show = true;
}