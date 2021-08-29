import { Component, Input, OnInit } from '@angular/core';
import Account from '../models/Account';
import Phone from '../models/Phone';
import Plan from '../models/Plan';
import { TelecomService } from '../telecom.service';

@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.css']
})
export class PlanDetailComponent implements OnInit {
  myAccount!: Account;
  myPlanList! : Plan[];
  
  @Input() onePlan!: Plan;
  // onePhone! : Phone;

  constructor(private service: TelecomService) { }

  ngOnInit(): void {
    this.myAccount = this.service.myAccount;
  }

}
