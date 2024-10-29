import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){}

  showPassword: boolean = false;


  submit(){
  this.router.navigate(['dashboard'])
  }

  togglePasswordVisibility() {
    const passwordInput = document.getElementById('passwordInput') as HTMLInputElement;
    this.showPassword = !this.showPassword;
    passwordInput.type = this.showPassword ? 'text' : 'password';
  }
}
