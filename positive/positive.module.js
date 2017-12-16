import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositiveComponent } from 'ng2-resume/positive/positive';
import { SHARED_DECLARATIONS } from 'ng2-resume/shared/shared.facade';
import { POSITIVE_DECLARATIONS } from 'ng2-resume/positive/positive.facade';

import { ResumeService } from 'ng2-resume/shared/services/resume';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PositiveComponent,
    SHARED_DECLARATIONS,
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
