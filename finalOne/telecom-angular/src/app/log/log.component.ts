import { Component, OnInit } from '@angular/core';
import Account from '../models/Account';
import { TelecomService } from '../telecom.service';
import { Emitters } from '../emitters/emitters';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})

export class LogComponent implements OnInit {
  AliaIsCute = true;
  accountToLogin = new Account();
  account_id! : number;

  constructor(
    private service: TelecomService,
    private router: Router,
    private route: ActivatedRoute,) {

  }

  logInAccount(): void {

    this.service.logInAccount(this.accountToLogin).subscribe(data => {
      withCredentials: true;
      this.account_id = data.account_id
      this.router.navigate(['home/'+this.account_id]);
      // this.route.url
      Emitters.authEmitter.emit(true);
    }, err => {
      Emitters.authEmitter.emit(false);
    });
  }

  ngOnInit(): void {
  }

}
