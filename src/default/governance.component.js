import { Component } from '@angular/core';

@Component({
  selector: 'governance',
  inputs: [ 'governance' ],
  template: `
  <ng-template [ngIf]="!empty()">
  <hr>
  <section id="governance">
    <header title="Governance"></header>
    <div *ngFor="let position of governance">
      <h3>
        <ng-template [ngIf]="position.role">
        <em>{{ position.role }}</em><ng-template [ngIf]="position.organization">, {{ position.organization }}</ng-template>
        </ng-template>
      </h3>
    </div>
    <!-- <duration [start]="position.start" [end]="position.end"></duration> -->
    <!-- <highlights [highlights]="position.highlights"></highlights> -->
    <!-- <keywords [keywords]="position.keywords"></keywords> -->
  </section>
  </ng-template>
  `
})
export class GovernanceComponent {
  empty () {
    // has positions
    return this.governance.length === 0;
  }
}
