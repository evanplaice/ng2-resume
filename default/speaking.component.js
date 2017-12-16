import { Component } from '@angular/core';

@Component({
  selector: 'speaking',
  inputs: [ 'speaking' ],
  template: `
  <ng-template [ngIf]="!empty()">
  <hr>
  <section id="speaking">
    <header title="Speaking"><span class="fa fa-lg fa-users"></span></header>
    <div *ngFor="let talk of speaking">
      <h3>
        <ng-template [ngIf]="talk.title"><em>{{ talk.title }}</em>, </ng-template>
        {{ talk.event }}
      </h3>
      <duration [start]="talk.date"></duration>
      <summary>{{ talk.summary }}</summary>
      <highlights [highlights]="talk.highlights"></highlights>
      <keywords [keywords]="talk.keywords"></keywords>
    </div>
  </section>
  </ng-template>
  `
})
export class SpeakingComponent {
  empty () {
    // has talks
    return this.speaking.length === 0;
  }
}
