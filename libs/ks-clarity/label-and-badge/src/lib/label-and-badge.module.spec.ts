import { async, TestBed } from '@angular/core/testing';
import { LabelAndBadgeModule } from './label-and-badge.module';

describe('LabelAndBadgeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LabelAndBadgeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LabelAndBadgeModule).toBeDefined();
  });
});
