import { Component } from 'angular2/core';
import { TEMPLATE_DIRECTIVES } from '../../shared/shared';

@Component({
  selector: 'extracurricular',
  inputs: [ 'extracurricular' ],
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="extracurricular">
    <header title="Extracurricular"></header>
    // TODO: implement this
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ]
})
export class ExtracurricularComponent {
  empty () {
    // has activities
    return this.extracurricular.length === 0;
  }
}
