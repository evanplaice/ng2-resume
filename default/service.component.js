import { Component } from '@angular/core';

@Component({
  selector: 'service',
  inputs: [ 'service' ],
  template: `
  <ng-template [ngIf]="!empty()">
  <hr>
  <section id="service">
    <header title="Service"><span class="fa fa-lg fa-child"></span></header>
    <div *ngFor="let role of service.history">
      <h3 *ngIf="role.organization"><em>{{ role.position }}</em>,
        <ng-template [ngIf]="role.organization && !role.url">{{ role.organization }}</ng-template>
        <ng-template [ngIf]="role.organization && role.url"><a href="{{ role.url }}">{{ role.organization }}</a></ng-template>
      </h3>
      <duration [start]="role.start" [end]="role.end"></duration>
      <summary>{{ role.summary }}</summary>
      <highlights [highlights]="role.highlights"></highlights>
      <keywords [keywords]="role.keywords"></keywords>
    </div>
  </section>
  </ng-template>
  `
})
export class ServiceComponent {
  empty () {
    // has history
    if (this.service.history && Object.keys(this.service.history).length !== 0) {
      return false;
    }
    return true
  }
}
