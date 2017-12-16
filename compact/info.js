import { Component } from '@angular/core';

@Component({
  selector: 'info',
  inputs: [ 'info' ],
  template: `
  <template [ngIf]="!empty()">
  <section id="info">
    {{ info.brief }}
  </section>
  </template>
  `
})
export class InfoComponent {
  empty () {
    return Object.keys(this.info).length === 0;
  }
}
