import { async, TestBed } from '@angular/core/testing';
import { KsClrWizardModule } from './ks-clr-wizard.module';

describe('KsClrWizardModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [KsClrWizardModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(KsClrWizardModule).toBeDefined();
  });
});
