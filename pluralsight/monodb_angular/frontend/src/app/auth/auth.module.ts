import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UserPresentationComponent } from './user-presentation/user-presentation.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    UserPresentationComponent
  ],
  providers: [AuthService]
})
export class AuthModule { }
