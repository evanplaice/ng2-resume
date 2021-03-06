import { Component } from '@angular/core';

@Component({
  selector: 'info',
  inputs: [ 'info' ],
  template: `
  <ng-template [ngIf]="!empty()">
  <hr>
  <section id="info">
    <header title="Info"><span class="fa fa-lg fa-info"></span></header>
    {{ info.brief }}
  </section>
  </ng-template>
  `
})
export class InfoComponent {
  empty () {
    // has info
    return Object.keys(this.info).length === 0;
  }
}
