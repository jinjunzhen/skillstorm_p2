import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Phone from '../models/Phone';
import Plan from '../models/Plan';
import { TelecomService } from '../telecom.service';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent implements OnInit {
  showForm!: boolean;
  phoneToAdd: Phone = new Phone();
  @Input() onePlan! : Plan;

  constructor(
    private formBuilder: FormBuilder,
    private service: TelecomService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.showForm = false;

  }

  toShow(): void{
    this.showForm = !this.showForm;
  }
  savePhone(): void{
    console.log(this.phoneToAdd);
    this.service.savePhone(this.phoneToAdd).subscribe((data)=>{
      this.phoneToAdd = data;
      this.toShow();
      
      this.service.connectPhoneToPlan(this.phoneToAdd.phone_id, this.onePlan.plan_id);
    }, err => {
    });


  }
}
