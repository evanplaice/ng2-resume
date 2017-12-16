import { Component, ViewEncapsulation } from '@angular/core';

import template from './basis.html!text';
import style from './basis.css!text';

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
