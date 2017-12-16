import { Component } from '@angular/core';

@Component({
  selector: 'samples',
  inputs: [ 'samples' ],
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="samples">
    <header title="Samples"><span class="fa fa-lg fa-share"></span></header>
    <div *ngFor="let sample of samples">
      <h3 *ngIf="sample.title">
        <template [ngIf]="!sample.url">{{ role.title }}</template>
        <template [ngIf]="sample.url"><a href="{{ sample.url }}">{{ sample.title }}</a></template>
      </h3>
      <duration [start]="sample.date"></duration>
      <summary>{{ sample.summary }}</summary>
      <highlights [highlights]="sample.highlights"></highlights>
      <keywords [keywords]="sample.keywords"></keywords>
    </div>
  </section>
  </template>
  `
})
export class SamplesComponent {
  empty () {
    // has samples
    return this.samples.length === 0;
  }
}
