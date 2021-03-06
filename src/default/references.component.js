import { Component } from '@angular/core';

@Component({
  selector: 'references',
  inputs: [ 'references' ],
  template: `
  <ng-template [ngIf]="!empty() && !references.private">
  <hr>
  <section id="references">
    <header title="References"><span class="fa fa-lg fa-thumbs-o-up"></span></header>
    <div *ngFor="let reference of references">
      <h3>
        <ng-template [ngIf]="!reference.role"><em>{{ reference.name }}</em></ng-template>
        <ng-template [ngIf]="reference.role"><em>{{ reference.name }}</em>, {{ reference.role }}</ng-template>
      </h3>
      <contacts [contacts]="reference.contact"></contacts>
      <summary>{{ reference.summary }}</summary>
    </div>
  </section>
  </ng-template>
  `
})
export class ReferencesComponent {
  empty () {
    // has references
    return this.references.length === 0;
  }
}
