import { Component, View } from 'angular2/core';

@Component({
  selector: 'curriculum',
  inputs: [ 'curriculum' ],
  template: `
  <ul *ngIf="curriculum">
    <li *ngFor="let subject of curriculum" class="keywords">{{ subject }}</li>
  </ul>
  `
})
export class CurriculumComponent {}
