import { async, TestBed } from '@angular/core/testing';
import { KsClrButtonModule } from './ks-clr-button.module';

describe('KsClarityKsClrButtonModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [KsClrButtonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(KsClrButtonModule).toBeDefined();
  });
});
