import { Component, OnInit } from '@angular/core';
import Account from '../models/Account';
import { TelecomService } from '../telecom.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  accountToSave: Account = new Account();

  constructor(private service: TelecomService) { }

  saveAccount(): void{
    this.service.saveAccount(this.accountToSave).subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit(): void {
  }


}
