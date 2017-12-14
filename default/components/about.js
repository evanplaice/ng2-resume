import { Component } from 'angular2/core';
import { DerpPipe } from '../../shared/pipes/derp';

@Component({
  selector: 'about',
  inputs: [ 'name', 'contact', 'social' ],
  template: `
  <header style="float:left">
    <h1 *ngIf="name">{{ name }}</h1>
    <div id="contact">
      <div *ngIf="contact.email" class="email"><a href="mailto:{{ contact.email }}">{{ contact.email }}</a></div>
      <div *ngIf="contact.phone" class="phone">{{ contact.phone }}</div>
      <div *ngIf="contact.website" class="website"><a href="{{ contact.website }}">{{ contact.website }}</a></div>
    </div>
  </header>
  <div id="social" style="float:right;">
    <div *ngFor="let profile of social | derp">{{ profile.network }}: <a href="{{ profile.url }}">{{ profile.user }}</a></div>
  </div>
  <div style="clear:both;"></div>
  `,
  pipes: [ DerpPipe ]
})
export class AboutComponent {}
