import { Component } from '@angular/core';

@Component({
  selector: 'reading',
  inputs: [ 'reading' ],
  template: `
  <ng-template [ngIf]="!empty()">
  <hr>
  <section id="reading">
    <header title="Reading"><span class="fa fa-lg fa-book"></span></header>
    <div *ngFor="let piece of reading">
      <h3>
        <ng-template [ngIf]="!piece.url"><em>{{ piece.title }}</em><ng-template [ngIf]="piece.author">, {{ piece.author }}</ng-template></ng-template>
        <ng-template [ngIf]="piece.url"><a href="{{ piece.url }}"><em>{{ piece.title }}</em></a><ng-template [ngIf]="piece.author">, {{ piece.author }}</ng-template></ng-template>
      </h3>
      <duration [start]="piece.date"></duration>
      <summary>{{ piece.summary }}</summary>
    </div>
  </section>
  </ng-template>
  `
})
export class ReadingComponent {
  empty () {
    // has pieces
    return this.reading.length === 0;
  }
}
