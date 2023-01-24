import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService : AccountService, private router: Router) { }
  
  userName: string = "";
  password: string = "";


  ngOnInit(): void {
    debugger;
    if (this.accountService.getUserData() !== null)
      this.router.navigate(['/']);
  }

  login(){
    debugger;
    this.accountService.login(this.userName, this.password).subscribe({
      next: (data: any) => {
        debugger;
        data.userName = this.userName;
        localStorage.setItem("userData", JSON.stringify(data));
        this.router.navigate(['/']);
      },
      error: (err) => {
        debugger;
        alert("Contraseña incorrecta o servicio no disponible! -->" + err.error.errorMessages[0]);
        },
      });

  }

  goToRegister(){
    this.router.navigate(['/register']);
  }

}
