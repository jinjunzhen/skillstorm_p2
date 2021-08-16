import { Component, OnInit } from '@angular/core';
import Phone from '../models/Phone';
import { TelecomService } from '../telecom.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  constructor(private service: TelecomService) { }

  phoneList!: Phone[];
  
  ngOnInit(): void {
    this.service.findAllPhone().subscribe((data) => {
      this.phoneList = data;
      console.log(this.phoneList);
    })
  }
}
