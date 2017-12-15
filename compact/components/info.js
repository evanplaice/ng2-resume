import { Component } from '@angular/core';
import { TEMPLATE_DIRECTIVES } from '../../shared/shared';

@Component({
  selector: 'info',
  inputs: [ 'info' ],
  template: `
  <template [ngIf]="!empty()">
  <section id="info">
    {{ info.brief }}
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ]
})
export class InfoComponent {
  empty () {
    return Object.keys(this.info).length === 0;
  }
}
