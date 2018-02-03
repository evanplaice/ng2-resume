import { Component } from '@angular/core';

@Component({
  selector: 'header',
  inputs: [ 'title' ],
  template: `
    <ng-content></ng-content>
    <ng-template [ngIf]="title"><h2>{{ title }}</h2></ng-template>
  `
})
export class HeaderComponent {}
