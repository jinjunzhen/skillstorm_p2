import { Component } from '@angular/core';
import Account from './models/Account';
import Plan from './models/Plan';
import { TelecomService } from './telecom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'telecom-angular';
  isLogedIn! : boolean;
  currentUser! : Account;
  account! : Account;
  planList! : Plan[];

  constructor(
    private service: TelecomService,
  ) { }

  ngOnInit(): void {
    this.account = this.service.myAccount;
  }
}
