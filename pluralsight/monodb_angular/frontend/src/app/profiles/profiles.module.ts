import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { UsersComponent } from './users/component/users/users.component';
import { UsersContainerComponent } from './users/container/users-container/users-container.component';
import { UserComponent } from './user/component/user/user.component';
import { UserContainerComponent } from './user/container/user-container/user-container.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ProfileService } from './services/profile.service';
import { FeedsComponent } from './user/component/feeds/feeds.component';
import { FeedsService } from './services/feeds.service';

const routes: Route[] = [
  { path: '', component: UsersContainerComponent },
  { path: ':id', component: UserContainerComponent}
];

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    UsersComponent,
    UsersContainerComponent,
    UserComponent,
    UserContainerComponent,
    FeedsComponent
  ],
  providers: [ProfileService, FeedsService]
})
export class ProfilesModule { }
