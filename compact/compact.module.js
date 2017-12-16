import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompactComponent } from 'ng2-resume/compact/compact';
import { SHARED_DECLARATIONS } from 'ng2-resume/shared/shared.facade';
import { COMPACT_DECLARATIONS } from 'ng2-resume/compact/compact.facade';

import { ResumeService } from 'ng2-resume/shared/services/resume';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CompactComponent,
    SHARED_DECLARATIONS,
    COMPACT_DECLARATIONS
  ],
  exports: [
    CompactComponent
  ],
  providers: [
    ResumeService
  ]
})

export class ResumeModule { }
