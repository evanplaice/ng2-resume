import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES } from '../../shared/shared';

@Component({
  selector: 'interests',
  inputs: [ 'interests' ]
})
@View({
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="interests">
    <header title="Interests"><span class="fa fa-lg fa-bicycle"></span></header>
    <div *ngFor="#interest of interests">
      <h3>
        <em>{{ interest.name }}</em>
      </h3>
      <p *ngIf="interest.summary">{{ interest.summary }}</p>
      <keywords [keywords]="interest.keywords"></keywords>
    </div>
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ]
})
export class InterestsComponent {
  empty () {
    // has interests
    return this.interests.length === 0;
  }
}
