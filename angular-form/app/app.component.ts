import { Component } from '@angular/core';
import { FormStateService } from './form-state.service';
import { FormDataService } from './form-data.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
<config-form></config-form>
<type-form></type-form>
<treatment-form></treatment-form>`,
 // styleUrls: ['app.component.css'],
  providers: [
    FormStateService,
    FormDataService
  ]
})
export class AppComponent  {

}
