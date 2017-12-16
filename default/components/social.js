import { Component } from '@angular/core';

@Component({
  selector: 'social',
  inputs: [ 'social' ],
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="social">
    <header title="Social"></header>
    // TODO: implement this
  </section>
  </template>
  `
})
export class SocialComponent {
  empty () {
    // has social info
    return this.social.length === 0;
  }
}
