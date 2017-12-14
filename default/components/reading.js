import { Component } from 'angular2/core';
import { TEMPLATE_DIRECTIVES } from '../../shared/shared';

@Component({
  selector: 'reading',
  inputs: [ 'reading' ],
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="reading">
    <header title="Reading"><span class="fa fa-lg fa-book"></span></header>
    <div *ngFor="let piece of reading">
      <h3>
        <template [ngIf]="!piece.url"><em>{{ piece.title }}</em><template [ngIf]="piece.author">, {{ piece.author }}</template></template>
        <template [ngIf]="piece.url"><a href="{{ piece.url }}"><em>{{ piece.title }}</em></a><template [ngIf]="piece.author">, {{ piece.author }}</template></template>
      </h3>
      <duration [start]="piece.date"></duration>
      <summary>{{ piece.summary }}</summary>
    </div>
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ]
})
export class ReadingComponent {
  empty () {
    // has pieces
    return this.reading.length === 0;
  }
}
