import { Component } from '@angular/core';

@Component({
  selector: 'affiliations',
  inputs: [ 'affiliations' ],
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="affiliations">
    <header title="Affiliations"><span class="fa fa-lg fa-share-alt"></span></header>
    <div *ngFor="let association of affiliations.history">
      <h3>
        <template [ngIf]="!association.url"><em>{{ association.role }}</em>, {{ association.organization }}</template>
        <template [ngIf]="association.url"><em>{{ association.role }}</em>, <a href="{{ association.url}}">{{ association.organization }}</a></template>
      </h3>
      <duration [start]="association.start" [end]="association.end"></duration>
      <summary>{{ association.summary }}</summary>
      <highlights [highlights]="association.highlights"></highlights>
      <keywords [keywords]="association.keywords"></keywords>
    </div>
  </section>
  </template>
  `
})
export class AffiliationsComponent {
  empty () {
    // has history
    if (this.affiliations.history && Object.keys(this.affiliations.history).length !== 0) {
      return false;
    }
    return true
  }
}
