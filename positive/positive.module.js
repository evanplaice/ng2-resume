import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositiveComponent } from 'ng2-resume/positive/positive';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from 'ng2-resume/shared/shared';
import { POSITIVE_DECLARATIONS } from 'ng2-resume/positive/positive.facade';

import { ResumeService } from 'ng2-resume/shared/services/resume';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PositiveComponent,
    TEMPLATE_DIRECTIVES,
    TEMPLATE_PIPES,
    POSITIVE_DECLARATIONS
  ],
  exports: [
    PositiveComponent
  ],
  providers: [
    ResumeService
  ]
})

export class ResumeModule { }
