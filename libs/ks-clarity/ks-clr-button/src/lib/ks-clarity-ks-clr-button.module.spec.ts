import { async, TestBed } from '@angular/core/testing';
import { KsClarityKsClrButtonModule } from './ks-clarity-ks-clr-button.module';

describe('KsClarityKsClrButtonModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [KsClarityKsClrButtonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(KsClarityKsClrButtonModule).toBeDefined();
  });
});
