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

  constructor(
    private service: TelecomService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }


  toSaveAccount(): void{
    this.service.saveAccount(this.accountToStore).subscribe((data) => {
      withCredentials: true;
      
      this.accountToStore = data;
      this.router.navigate(['home/'+this.accountToStore.account_id]);
      console.log(this.accountToStore);
      Emitters.authEmitter.emit(true);
    }, err => {
      Emitters.authEmitter.emit(true);
    });
  }

  ngOnInit(): void {

  }

}
