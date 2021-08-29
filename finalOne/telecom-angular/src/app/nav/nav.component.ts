import { Component, OnInit } from '@angular/core';
import Account from '../models/Account';
import { TelecomService } from '../telecom.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // isLogedIn = true;

  constructor(private service: TelecomService) { }


  ngOnInit(): void {
  }

}
