import { async, TestBed } from '@angular/core/testing';
import { KsClrModalModule } from './ks-clr-modal.module';

describe('KsClrModalModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [KsClrModalModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(KsClrModalModule).toBeDefined();
  });
});
