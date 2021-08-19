import { Component, OnInit } from '@angular/core';
import Account from '../models/Account';
import { TelecomService } from '../telecom.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {
  accountToSave: Account = new Account();

  constructor(private service: TelecomService) { }

  saveAccount(): void{
    this.service.saveAccount(this.accountToSave).subscribe(data => {
    })
  }

  ngOnInit(): void {
  }


}

