import { async, TestBed } from '@angular/core/testing';
import { SharedUtilCoreModule } from './shared-util-core.module';

describe('SharedUtilCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUtilCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUtilCoreModule).toBeDefined();
  });
});
