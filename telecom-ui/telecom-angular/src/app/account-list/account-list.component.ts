import { Component, OnInit } from '@angular/core';
import Account from '../models/Account';
import { TelecomService } from '../telecom.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  constructor(private service: TelecomService) { }

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