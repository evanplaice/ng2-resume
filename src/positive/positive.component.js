import { Component, ViewEncapsulation, Inject } from '@angular/core';
import { ResumeService } from '../shared/services/resume';
import template from 'raw-loader!./positive.component.html';
import fontAwesome from 'raw-loader!font-awesome/css/font-awesome.min.css';
import style from 'raw-loader!./positive.component.css';

@Component({
  selector: 'resume',
  inputs: [ 'src', 'data' ],
  template: template,
  styles: [ style, fontAwesome ],
  encapsulation: ViewEncapsulation.Native
})
export class PositiveComponent {
  constructor(@Inject(ResumeService) resumeService) {
    this.resumeService = resumeService;
  }

  ngOnInit () {
    this.resumeService.loadResume(this.src);
    this.resumeService.resume$.subscribe(update => this.resume = update);
  }
}
