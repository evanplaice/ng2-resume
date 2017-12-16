import { Component } from '@angular/core';

@Component({
  selector: 'governance',
  inputs: [ 'governance' ],
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="governance">
    <header title="Governance"></header>
    <div *ngFor="let position of governance">
      <h3>
        <template [ngIf]="position.role">
        <em>{{ position.role }}</em><template [ngIf]="position.organization">, {{ position.organization }}</template>
        </template>
      </h3>
    </div>
    <!-- <duration [start]="position.start" [end]="position.end"></duration> -->
    <!-- <highlights [highlights]="position.highlights"></highlights> -->
    <!-- <keywords [keywords]="position.keywords"></keywords> -->
  </section>
  </template>
  `
})
export class GovernanceComponent {
  empty () {
    // has positions
    return this.governance.length === 0;
  }
}
