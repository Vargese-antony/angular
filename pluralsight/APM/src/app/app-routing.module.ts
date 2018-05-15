//Angular libraries
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
//App Components
import { WelcomeComponent } from "./welcome/welcome.component";

const routes : Routes = [
	{ path: 'welcome', component:WelcomeComponent},
	{ path: '', redirectTo:'welcome', pathMatch:'full'},
	{ path: '**', redirectTo:'welcome', pathMatch:'full'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}