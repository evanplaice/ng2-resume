import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasisComponent } from 'ng2-resume/basis/basis';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from 'ng2-resume/shared/shared';
import { BASIS_DECLARATIONS } from 'ng2-resume/basis/basis.facade';

import { ResumeService } from 'ng2-resume/shared/services/resume';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BasisComponent,
    TEMPLATE_DIRECTIVES,
    TEMPLATE_PIPES,
    BASIS_DECLARATIONS
  ],
  exports: [
    BasisComponent
  ],
  providers: [
    ResumeService
  ]
})

export class ResumeModule { }
