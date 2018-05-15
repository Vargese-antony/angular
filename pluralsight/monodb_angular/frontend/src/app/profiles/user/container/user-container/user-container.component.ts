import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IUser } from '../../../../models/user.model';
import { ProfileService } from '../../../services/profile.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {
  user: IUser;
  constructor(
    private activatedRoute: ActivatedRoute,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    /*this.activatedRoute.params.pipe(
      map( params => params['id']),
      switchMap( (id) => this.profileService.getUserById(id))
    )
    .subscribe(res => this.user = res);*/

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    // get the user informations
    this.profileService.getUserById(id).subscribe(res => this.user = res);

    // get the feeds
    this
  }

}
