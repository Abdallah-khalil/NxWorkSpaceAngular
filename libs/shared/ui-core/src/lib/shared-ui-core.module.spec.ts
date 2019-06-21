import { async, TestBed } from '@angular/core/testing';
import { SharedUiCoreModule } from './shared-ui-core.module';

describe('SharedUiCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiCoreModule).toBeDefined();
  });
});
