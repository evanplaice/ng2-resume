import { Component } from '@angular/core';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from '../../shared/shared';

@Component({
  selector: '_sample',
  inputs: [ '_sample' ],
  template: ``,
  directives: [ TEMPLATE_DIRECTIVES ],
  pipes: [ TEMPLATE_PIPES ]
})
export class _SampleComponent {
  empty () {
    // return this._sample.length === 0;
    // return Object.keys(this._sample).length === 0;
  }
}
