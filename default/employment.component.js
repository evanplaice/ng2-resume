import { Component } from '@angular/core';

@Component({
  selector: 'employment',
  inputs: [ 'employment' ],
  template: `
  <ng-template [ngIf]="!empty()">
  <hr>
  <section id="employment">
    <header title="Employment"><span class="fa fa-lg fa-building"></span></header>
    <div *ngFor="let job of employment.history">
      <div>
        <h3><em>{{ job.position }}</em>,
          <ng-template [ngIf]="job.url"><a href="{{ job.url }}">{{ job.employer }}</a></ng-template>
          <ng-template [ngIf]="!job.url">{{ job.employer }}</ng-template>
        </h3>
        <duration [start]="job.start" [end]="job.end"></duration>
        <summary>{{ job.summary }}</summary>
        <highlights [highlights]="job.highlights"></highlights>
        <keywords [keywords]="job.keywords"></keywords>
      </div>
    </div>
  </section>
  </ng-template>
  `
})
export class EmploymentComponent {
  empty () {
    // has history
    if (this.employment.history && Object.keys(this.employment.history).length !== 0) {
      return false;
    }
    return true
  }
}
