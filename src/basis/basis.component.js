import { Component, ViewEncapsulation, Inject } from '@angular/core';
import { ResumeService } from '../shared/services/resume';
import template from 'raw-loader!./basis.component.html';
import style from 'raw-loader!./basis.component.css';

@Component({
  selector: 'resume',
  inputs: [ 'src', 'data' ],
  template: template,
  style: [ style ],
  encapsulation: ViewEncapsulation.Native
})
export class BasisComponent {
  constructor(@Inject(ResumeService) resumeService) {
    this.resumeService = resumeService;
  }

  ngOnInit () {
    this.resumeService.loadResume(this.src);
    this.resumeService.resume$.subscribe(update => this.resume = update);
  }
}
