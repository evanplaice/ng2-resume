import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModernComponent } from 'ng2-resume/modern/modern';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from 'ng2-resume/shared/shared';
import { MODERN_DECLARATIONS } from 'ng2-resume/modern/modern.facade';

import { ResumeService } from 'ng2-resume/shared/services/resume';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModernComponent,
    TEMPLATE_DIRECTIVES,
    TEMPLATE_PIPES,
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
