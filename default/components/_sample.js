import { Component } from '@angular/core';

@Component({
  selector: '_sample',
  inputs: [ '_sample' ],
  template: ``,
})
export class _SampleComponent {
  empty () {
    // return this._sample.length === 0;
    // return Object.keys(this._sample).length === 0;
  }
}
