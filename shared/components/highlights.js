import { Component, View } from 'angular2/core';

@Component({
  selector: 'highlights',
  inputs: [ 'highlights' ],
  template: `
  <ul *ngIf="highlights">
    <li *ngFor="let highlight of highlights">{{ highlight }}</li>
  </ul>
  `
})
export class HighlightsComponent {}
