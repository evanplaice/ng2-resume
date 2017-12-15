import { Component } from 'angular-core';

@Component({
  selector: 'header',
  inputs: [ 'title' ],
  template: `
    <ng-content></ng-content>
    <template [ngIf]="title"><h2>{{ title }}</h2></template>
  `
})
export class HeaderComponent {}
