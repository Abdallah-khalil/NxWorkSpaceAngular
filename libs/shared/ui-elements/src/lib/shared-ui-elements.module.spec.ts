import { async, TestBed } from '@angular/core/testing';
import { SharedUiElementsModule } from './shared-ui-elements.module';

describe('SharedUiElementsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiElementsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiElementsModule).toBeDefined();
  });
});
