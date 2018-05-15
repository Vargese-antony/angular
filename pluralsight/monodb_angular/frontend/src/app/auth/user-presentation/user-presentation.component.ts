import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { } from '@angular/';

@Component({
  selector: 'app-user-presentation',
  templateUrl: './user-presentation.component.html',
  styleUrls: ['./user-presentation.component.css']
})
export class UserPresentationComponent implements OnInit {
  @Output() loginRegisterEvent = new EventEmitter();
  @Input() loginForm = false;

  userData = {};

  constructor() { }

  ngOnInit() {

  }

  onLoginRegister() {
    this.loginRegisterEvent.emit(this.userData);
  }
}
