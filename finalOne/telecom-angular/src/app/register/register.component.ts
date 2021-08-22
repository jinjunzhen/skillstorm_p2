import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';
import { LogComponent } from '../log/log.component';
import Account from '../models/Account';
import { TelecomService } from '../telecom.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
  
})
export class RegisterComponent implements OnInit {
  accountToStore = new Account();
  acct_id! : number;

  constructor(
    private service: TelecomService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }


  toSaveAccount(): void{
    this.service.logInAccount(this.accountToStore).subscribe((data) => {
      withCredentials: true;
      this.router.navigate(['/']);
      this.accountToStore = data;
      console.log(this.accountToStore);
      Emitters.authEmitter.emit(true);
    }, err => {
      Emitters.authEmitter.emit(true);
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.acct_id = params['acct_id'];
    });
  }

}
