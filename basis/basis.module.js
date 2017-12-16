import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasisComponent } from 'ng2-resume/basis/basis.component';
import { SHARED_DECLARATIONS } from 'ng2-resume/shared/shared.facade';
import { BASIS_DECLARATIONS } from 'ng2-resume/basis/basis.facade';

import { ResumeService } from 'ng2-resume/shared/services/resume';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BasisComponent,
    SHARED_DECLARATIONS,
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
