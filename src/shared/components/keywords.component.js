import { Component } from '@angular/core';

@Component({
  selector: 'keywords',
  inputs: [ 'keywords' ],
  template: `
  <ng-template [ngIf]="keywords">
  <span class="keywords" *ngFor="let keyword of keywords">{{ keyword }} </span>
  </ng-template>
  `
})
export class KeywordsComponent {}
