import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: '', pathMatch: 'full', redirectTo: 'welcome'},
  { path: 'user', loadChildren: 'app/auth/auth.module#AuthModule'},
  { path: 'users', loadChildren: 'app/profiles/profiles.module#ProfilesModule'}
];

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
