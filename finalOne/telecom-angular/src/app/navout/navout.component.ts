import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Account from '../models/Account';
import { TelecomService } from '../telecom.service';

@Component({
  selector: 'app-navout',
  templateUrl: './navout.component.html',
  styleUrls: ['./navout.component.css']
})
export class NavoutComponent implements OnInit {
  account! : Account;

  constructor(
    private service: TelecomService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  toLogOut(): void {
    this.service.myAccount = new Account();
    this.router.navigate(['home/']);
  }

  ngOnInit(): void {
  }

}
