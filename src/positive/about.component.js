import { Component } from '@angular/core';

@Component({
  selector: 'about',
  inputs: [ 'name', 'info', 'contact' ],
  template: `
  <header>
  <h1 *ngIf="name">{{ name | nolast }} <span style="color: #C00000;">{{ name | last }}</span></h1>
  <span class="label">{{ info.label }}</span>
  <p id="contact">
    <span *ngIf="contact.email" class="email"><a href="mailto:{{ contact.email }}">{{ contact.email }}</a></span>
    <span *ngIf="contact.phone" class="phone">{{ contact.phone }}</span>
    <span *ngIf="contact.website" class="website"><a href="{{ contact.website }}">{{ contact.website }}</a></span>
  </p>
  </header>
  `
})
export class AboutComponent {}
