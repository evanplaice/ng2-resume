import { Component } from '@angular/core';

@Component({
  selector: 'info',
  inputs: [ 'info' ],
  template: `
  <ng-template [ngIf]="!empty()">
  <section id="info">
    {{ info.brief }}
  </section>
  </ng-template>
  `
})
export class InfoComponent {
  empty () {
    return Object.keys(this.info).length === 0;
  }
}
