import { Component } from 'angular2/core';

@Component({
  selector: 'contacts',
  inputs: [ 'contacts' ],
  template: `
  <template [ngIf]="contacts">
    <ul *ngFor="let contact of contacts">
      <li>{{ contact.category }} - {{ contact.value }}</li>
    </ul>
  </template>
  `
})
export class ContactsComponent {}
