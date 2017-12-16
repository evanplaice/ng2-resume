import { Component } from '@angular/core';

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
  `
})
export class ExtracurricularComponent {
  empty () {
    // has activities
    return this.extracurricular.length === 0;
  }
}
