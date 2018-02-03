import { Component } from '@angular/core';

@Component({
  selector: 'testimonials',
  inputs: [ 'testimonials' ],
  template: `
  <ng-template [ngIf]="!empty()">
  <hr>
  <section id="testimonials">
    <header title="Testimonials"><span class="fa fa-lg fa-thumbs-o-up"></span></header>
    <div *ngFor="let testimonial of testimonials">
      <h3><em>{{ testimonial.name }}</em></h3>
      <summary>{{ testimonial.quote }}</summary>
    </div>
  </section>
  </ng-template>
  `
})
export class TestimonialsComponent {
  empty () {
    // has testimonials
    return this.testimonials.length === 0;
  }
}
