import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { IUser } from '../../../../models/user.model';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.css']
})
export class UsersContainerComponent implements OnInit {
  users: IUser[];

  constructor(
    private router: Router,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.profileService.getUsers()
      .subscribe( users => this.users = users);
  }

  userItemSelected(user: IUser) {
    // console.log('user Selected', user);
    this.router.navigate(['/users', user._id]);
  }
}
