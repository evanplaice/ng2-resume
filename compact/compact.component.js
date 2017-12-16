import { Component, ViewEncapsulation } from '@angular/core';

import template from './compact.component.html!text';
import fontAwesome from 'font-awesome/css/font-awesome.min.css!text';
import style from './compact.component.css!text';

@Component({
  selector: 'resume',
  inputs: [ 'resume' ],
  template: template,
  styles: [ style, fontAwesome ],
  encapsulation: ViewEncapsulation.Native
})
export class CompactComponent {
  constructor () { }
}
