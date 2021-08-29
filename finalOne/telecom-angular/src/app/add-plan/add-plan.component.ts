import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Account from '../models/Account';
import Plan from '../models/Plan';
import { TelecomService } from '../telecom.service';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.css']
})
export class AddPlanComponent implements OnInit {
  showForm!:boolean;
  planform!: FormGroup;
  newPlan! : Plan;
  account! : Account;

  constructor(
    private formBuilder: FormBuilder,
    private service: TelecomService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  toShow(): void {
    this.showForm = !this.showForm;
  }

  savePlan(): void {
    this.service.savePlan(this.planform.getRawValue()).subscribe((data)=>{
      this.newPlan = data;
      console.log(this.newPlan);
      this.service.connectPlanToAcct(this.newPlan.plan_id, this.account.account_id);

    }, err => {
    });
    
    this.toShow();
  }

  ngOnInit(): void {
    this.account = this.service.myAccount;
    this.showForm = false;
    this.planform = this.formBuilder.group({
      plan_type: "",
    });
  }

}

