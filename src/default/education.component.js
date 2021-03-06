import { Component } from '@angular/core';

@Component({
  selector: 'education',
  inputs: [ 'education' ],
  template: `
  <ng-template [ngIf]="!empty()">
  <hr>
  <section id="education">
    <header title="Education"><span class="fa fa-lg fa-mortar-board"></span></header>
    <div *ngFor="let school of education.history">
      <h3>
        <ng-template [ngIf]="school.title"><em>{{ school.title }}</em>, </ng-template>{{ school.institution }}
      </h3>
      <duration [start]="school.start" [end]="school.end"></duration>
      <summary>{{ school.summary }}</summary>
      <curriculum [curriculum]="school.curriculum"></curriculum>
      <highlights [highlights]="school.highlights"></highlights>
      <keywords [keywords]="school.keywords"></keywords>
    </div>
  </section>
  </ng-template>
  `
})
export class EducationComponent {
  empty () {
    // has history
    if (this.education.history && Object.keys(this.education.history).length !== 0) {
      return false;
    }
    return true
  }
}
