import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, Input } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import Account from '../models/Account';
import { TelecomService } from '../telecom.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message = 'You re not logged in';
  account! : Account;
  aid = 0;
  

  constructor(
    private service: TelecomService,
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void{
    this.account = this.service.myAccount;

  }

}