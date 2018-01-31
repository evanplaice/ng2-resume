import { Component, ViewEncapsulation } from '@angular/core';

import template from './positive.component.html!text';
import fontAwesome from 'font-awesome/css/font-awesome.min.css!text';
import style from './positive.component.css!text';

@Component({
  selector: 'resume',
  inputs: [ 'resume' ],
  template: template,
  styles: [ style, fontAwesome ],
  encapsulation: ViewEncapsulation.Native
})
export class PositiveComponent {
  constructor () { }
}