import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IUser } from '../../../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  @Input() users: IUser[];
  @Output() userItemSelectedEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onUserItemSelected(user: IUser) {
    this.userItemSelectedEvent.emit(user);
  }

}
