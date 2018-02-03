import { Component } from '@angular/core';

@Component({
  selector: 'summary',
  inputs: [ 'summary' ],
  template: `
  <ng-template [ngIf]="summary">
  <p>{{ summary }}}</p>
  </ng-template>
  `
})
export class SummaryComponent {}
