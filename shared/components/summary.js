import { Component } from 'angular-core';

@Component({
  selector: 'summary',
  inputs: [ 'summary' ],
  template: `
  <template [ngIf]="summary">
  <p>{{ summary }}}</p>
  </template>
  `
})
export class SummaryComponent {}
