import { Component } from '@angular/core';

@Component({
  selector: 'keywords',
  inputs: [ 'keywords' ],
  template: `
  <template [ngIf]="keywords">
  <span class="keywords" *ngFor="let keyword of keywords">{{ keyword }} </span>
  </template>
  `
})
export class KeywordsComponent {}
