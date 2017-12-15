import { Component } from '@angular/core';
import { TEMPLATE_DIRECTIVES } from '../../shared/shared';

@Component({
  selector: 'info',
  inputs: [ 'info' ],
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="info">
    <header title="Info"><span class="fa fa-lg fa-info"></span></header>
    {{ info.brief }}
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ]
})
export class InfoComponent {
  empty () {
    // has info
    return Object.keys(this.info).length === 0;
  }
}
