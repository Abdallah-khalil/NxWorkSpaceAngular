import { async, TestBed } from '@angular/core/testing';
import { KsClrAlertModule } from './ks-clr-alert.module';

describe('KsClarityKsClrAlertModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [KsClrAlertModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(KsClrAlertModule).toBeDefined();
  });
});
