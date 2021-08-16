import { Component, OnInit } from '@angular/core';
import Phone from '../models/Phone';
import { TelecomService } from '../telecom.service';

@Component({
  selector: 'app-new-phone',
  templateUrl: './new-phone.component.html',
  styleUrls: ['./new-phone.component.css']
})
export class NewPhoneComponent implements OnInit {
  phoneToSave: Phone = new Phone();

  constructor(private service: TelecomService) { }

  savePhone(): void{
    this.service.savePhone(this.phoneToSave).subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
