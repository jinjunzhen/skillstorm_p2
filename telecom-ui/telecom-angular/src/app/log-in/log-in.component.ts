import { Component, OnInit } from '@angular/core';
import Account from '../models/Account';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  accountToLogin = new Account();

  constructor() { }

  ngOnInit(): void {
  }

}
