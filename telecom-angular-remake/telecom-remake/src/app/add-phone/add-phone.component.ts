import { ConditionalExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Phone from '../models/Phone';
import Plan from '../models/Plan';
import { TelecomService } from '../telecom.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent implements OnInit {
  @Input() onePlan!: Plan;
  newPhoneToAdd!: FormGroup;
  phoneToAdd!: Phone;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tokenStorage: TokenStorageService,
    private service: TelecomService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.newPhoneToAdd = this.formBuilder.group({
      phone_area: new FormControl("", [
        Validators.required
      ]),
      phone_number: new FormControl("", [
        Validators.required
      ]),
      phone_first_name: new FormControl("", [
        Validators.required
      ]),
      phone_last_name: new FormControl("", [
        Validators.required
      ]),
    });

    // let randomPhoneNumber = {
    //   'phone_area' : 123,
    //   'phone_number' : 1234567
    // }

    // this.newPhoneToAdd.patchValue(randomPhoneNumber);
  }

  getNumber(): void {
    let phone_area = Math.floor(Math.random() * (999 - 100) + 100);
    let phone_number = Math.floor(Math.random() * (9999 - 1000) + 1000);

    let randomPhoneNumber = {
      'phone_area' : phone_area,
      'phone_number' : phone_number
    }

    this.newPhoneToAdd.patchValue(randomPhoneNumber);
  }

  addPhone():void{
    this.service.savePhone(this.newPhoneToAdd.value).subscribe((data)=> {
      this.phoneToAdd = data;
      this.service.connectPhoneToPlan(this.phoneToAdd.phone_id, this.onePlan.plan_id);

      this.router.navigate(['/home']).then(() => {
        parent.location.reload();
      });
    },
    err => {
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

}
