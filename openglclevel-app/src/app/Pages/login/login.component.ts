import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService : AccountService) { }

  ngOnInit(): void {
  }

  fillToken(){

    this.accountService.token = "33333"
  }

}
