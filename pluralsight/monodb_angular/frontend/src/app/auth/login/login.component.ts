import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit() {
  }

  login(userData) {
    this.authService.loginUser(userData).subscribe(res => {
      if (res && res.token) {
        localStorage.setItem('token', res.token);
      } else {
        console.error('Token not found in the response');
      }
    });
  }

}
