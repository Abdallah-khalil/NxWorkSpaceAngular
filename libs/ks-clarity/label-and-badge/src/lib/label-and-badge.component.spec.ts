import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelAndBadgeComponent } from './label-and-badge.component';

describe('LabelAndBadgeComponent', () => {
  let component: LabelAndBadgeComponent;
  let fixture: ComponentFixture<LabelAndBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelAndBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelAndBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
