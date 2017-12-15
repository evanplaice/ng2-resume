import { Component } from '@angular/core';
import { TEMPLATE_DIRECTIVES } from '../../shared/shared';

@Component({
  selector: 'testimonials',
  inputs: [ 'testimonials' ],
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="testimonials">
    <header title="Testimonials"><span class="fa fa-lg fa-thumbs-o-up"></span></header>
    <div *ngFor="let testimonial of testimonials">
      <h3><em>{{ testimonial.name }}</em></h3>
      <summary>{{ testimonial.quote }}</summary>
    </div>
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ]
})
export class TestimonialsComponent {
  empty () {
    // has testimonials
    return this.testimonials.length === 0;
  }
}
