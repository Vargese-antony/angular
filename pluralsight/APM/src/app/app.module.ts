import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//App Components
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
//app modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';
import { ProductRoutingModule } from './product/product-routing.module';

@NgModule({
  //Which Components belong to this modules goes here
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  //External modules that are needed to all the components of this module
  imports: [
    BrowserModule,
    SharedModule,
    ProductModule,
    ProductRoutingModule,
    AppRoutingModule //Routing module for the application
  ],
  //For services
  providers: [],
  //Startup component of the the application, this component selector should be present in the index.html 
  bootstrap: [AppComponent]
})
export class AppModule { }
