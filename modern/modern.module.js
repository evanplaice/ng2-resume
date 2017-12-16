import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModernComponent } from 'ng2-resume/modern/modern';
import { SHARED_DECLARATIONS } from 'ng2-resume/shared/shared.facade';
import { MODERN_DECLARATIONS } from 'ng2-resume/modern/modern.facade';

import { ResumeService } from 'ng2-resume/shared/services/resume';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModernComponent,
    SHARED_DECLARATIONS,
    MODERN_DECLARATIONS
  ],
  exports: [
    ModernComponent
  ],
  providers: [
    ResumeService
  ]
})

export class ResumeModule { }
