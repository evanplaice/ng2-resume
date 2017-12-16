import { Component, ViewEncapsulation } from '@angular/core';

import template from './basis.component.html!text';
import style from './basis.component.css!text';

@Component({
  selector: 'resume',
  inputs: [ 'resume' ],
  template: template,
  style: [ style ],
  encapsulation: ViewEncapsulation.Native
})
export class BasisComponent {
  constructor () { }
}
