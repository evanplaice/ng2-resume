import { Component, ViewEncapsulation } from '@angular/core';
import { BASIS_DIRECTIVES } from '../basis';

import template from './basis.html!text';
import style from './basis.css!text';

@Component({
  selector: 'resume',
  inputs: [ 'resume' ],
  template: template,
  style: [ style ],
  directives: [ BASIS_DIRECTIVES ],
  encapsulation: ViewEncapsulation.Native
})
export class BasisComponent {
  constructor () {
    // console.log('resume');
  }
}
