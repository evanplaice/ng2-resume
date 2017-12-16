import { Component } from '@angular/core';

@Component({
  selector: 'samples',
  inputs: [ 'samples' ],
  template: `
  <ng-template [ngIf]="!empty()">
  <hr>
  <section id="samples">
    <header title="Samples"><span class="fa fa-lg fa-share"></span></header>
    <div *ngFor="let sample of samples">
      <h3 *ngIf="sample.title">
        <ng-template [ngIf]="!sample.url">{{ role.title }}</ng-template>
        <ng-template [ngIf]="sample.url"><a href="{{ sample.url }}">{{ sample.title }}</a></ng-template>
      </h3>
      <duration [start]="sample.date"></duration>
      <summary>{{ sample.summary }}</summary>
      <highlights [highlights]="sample.highlights"></highlights>
      <keywords [keywords]="sample.keywords"></keywords>
    </div>
  </section>
  </ng-template>
  `
})
export class SamplesComponent {
  empty () {
    // has samples
    return this.samples.length === 0;
  }
}
