import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register(userData) {
    this.authService.registerUser(userData).subscribe();
  }
}
