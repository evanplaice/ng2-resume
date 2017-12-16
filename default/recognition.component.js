import { Component } from '@angular/core';

@Component({
  selector: 'recognition',
  inputs: [ 'recognition' ],
  template: `
  <ng-template [ngIf]="!empty()">
  <hr>
  <section id="recognition">
    <header title="Recognition"><span class="fa fa-lg fa-trophy"></span></header>
    <div *ngFor="let award of recognition">
      <h3>
        <ng-template [ngIf]="!award.from">
          <em>{{ award.title }}</em>
        </ng-template>
        <ng-template [ngIf]="award.from">
          <em>{{ award.title }}, </em>
          <ng-template [ngIf]="!award.url">{{ award.from }}</ng-template>
          <ng-template [ngIf]="award.url"> <a href="{{ award.url }}">{{ award.from }}</a></ng-template>
        </ng-template>
      </h3>
      <duration [start]="award.date"></duration>
      <summary>{{ award.summary }}</summary>
    </div>
  </section>
  </ng-template>
  `
})
export class RecognitionComponent {
  empty () {
    // has awards
    return this.recognition.length === 0;
  }
}
