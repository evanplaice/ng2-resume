// -------------- FRESH themes --------------
export { ResumeModule as BasisModule } from 'ng2-resume/basis/basis.module';
export { ResumeModule as CompactModule } from 'ng2-resume/compact/compact.module';
export { ResumeModule as ModernModule } from 'ng2-resume/modern/modern.module';
export { ResumeModule as PositiveModule } from 'ng2-resume/positive/positive.module';

// -------------- FRESH models --------------
import { TEMPLATE_MODELS } from './shared/shared';

export const FRESH_MODELS = TEMPLATE_MODELS;

// -------------- FRESH service --------------
import { ResumeService as Service } from './shared/services/resume';

export const ResumeService = Service;
