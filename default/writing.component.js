import { Component } from '@angular/core';

@Component({
  selector: 'writing',
  inputs: [ 'writing' ],
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="writing">
    <header title="Writing"><span class="fa fa-lg fa-pencil"></span></header>
    <div *ngFor="let piece of writing">
      <h3>
        <template [ngIf]="!piece.publisher.url"><em>{{ piece.title }}</em>, {{ piece.publisher.name }}</template>
        <template [ngIf]="piece.publisher.url"><em>{{ piece.title }}</em>, <a href="{{ piece.publisher.url }}">{{ piece.publisher.name }}</a></template>
      </h3>
      <duration [start]="piece.date"></duration>
      <summary>{{ piece.summary }}</summary>
    </div>
  </section>
  </template>
  `
})
export class WritingComponent {
  empty () {
    // has pieces
    return this.writing.length === 0;
  }
}
