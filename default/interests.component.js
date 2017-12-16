import { Component } from '@angular/core';

@Component({
  selector: 'interests',
  inputs: [ 'interests' ],
  template: `
  <ng-template [ngIf]="!empty()">
  <hr>
  <section id="interests">
    <header title="Interests"><span class="fa fa-lg fa-bicycle"></span></header>
    <div *ngFor="let interest of interests">
      <h3>
        <em>{{ interest.name }}</em>
      </h3>
      <p *ngIf="interest.summary">{{ interest.summary }}</p>
      <keywords [keywords]="interest.keywords"></keywords>
    </div>
  </section>
  </ng-template>
  `
})
export class InterestsComponent {
  empty () {
    // has interests
    return this.interests.length === 0;
  }
}
