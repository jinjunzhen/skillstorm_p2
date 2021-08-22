import { Component } from '@angular/core';
import Account from './models/Account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'telecom-angular';
  isLogedIn! : boolean;
  currentUser! : Account;






  ngOnInit(): void {
    this.isLogedIn = false;
  }
}
