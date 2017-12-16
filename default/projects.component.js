import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  inputs: [ 'projects' ],
  template: `
  <ng-template [ngIf]="!empty()">
  <hr>
  <section id="projects">
    <header title="Projects"><span class="fa fa-lg fa-star"></span></header>
    <div *ngFor="let project of projects">
      <h3 *ngIf="project.role"><em>{{ project.role }}</em>,
        <ng-template [ngIf]="project.url"><a href="{{ project.url }}">{{ project.title }}</a></ng-template>
        <ng-template [ngIf]="!project.url">{{ project.title }}</ng-template>
      </h3>
      <duration [start]="project.start" [end]="project.end"></duration>
      <summary>{{ project.summary }}</summary>
      <highlights [highlights]="project.highlights"></highlights>
      <keywords [keywords]="project.keywords"></keywords>
    </div>
  </section>
  </ng-template>
  `
})
export class ProjectsComponent {
  empty () {
    // has projects
    return this.projects.length === 0;
  }
}
