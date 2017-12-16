import { Component } from '@angular/core';

@Component({
  selector: 'languages',
  inputs: [ 'languages' ],
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="languages">
    <header title="Languages"></header>
    // TODO: implement this
  </section>
  </template>
  `
})
export class LanguagesComponent {
  empty () {
    // has languages
    return this.languages.length === 0;
  }
}
