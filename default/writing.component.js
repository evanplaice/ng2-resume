import { Component } from '@angular/core';

@Component({
  selector: 'writing',
  inputs: [ 'writing' ],
  template: `
  <ng-template [ngIf]="!empty()">
  <hr>
  <section id="writing">
    <header title="Writing"><span class="fa fa-lg fa-pencil"></span></header>
    <div *ngFor="let piece of writing">
      <h3>
        <ng-template [ngIf]="!piece.publisher.url"><em>{{ piece.title }}</em>, {{ piece.publisher.name }}</ng-template>
        <ng-template [ngIf]="piece.publisher.url"><em>{{ piece.title }}</em>, <a href="{{ piece.publisher.url }}">{{ piece.publisher.name }}</a></ng-template>
      </h3>
      <duration [start]="piece.date"></duration>
      <summary>{{ piece.summary }}</summary>
    </div>
  </section>
  </ng-template>
  `
})
export class WritingComponent {
  empty () {
    // has pieces
    return this.writing.length === 0;
  }
}
