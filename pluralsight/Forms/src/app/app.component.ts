import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Employee } from './models/employee.model';
import { FormPosterService } from './services/form-poster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  languages : string[] = [ 'English', 'Spanish', 'Other'];
  model = new Employee('Mark', 'Zok', true, 'W2', 'default');
  hasPrimaryLanguageError : boolean = false;

  constructor( private _formPosterService : FormPosterService) {
    
  }

  validatePrimaryLanguage(value) : boolean {
    if( value === 'default')
      this.hasPrimaryLanguageError = true;
    else
      this.hasPrimaryLanguageError = false;

    return this.hasPrimaryLanguageError;
  }

  onFormSubmit(form : NgForm) {
    //console.log(form.value);
    //Validate
    if(this.validatePrimaryLanguage(this.model.language)) return;
    this._formPosterService.postEmployeeForm(this.model)
      .subscribe( 
        data => console.log('Success: ', data ), 
        err => console.log('Error ',err ) 
      );
  }
}
