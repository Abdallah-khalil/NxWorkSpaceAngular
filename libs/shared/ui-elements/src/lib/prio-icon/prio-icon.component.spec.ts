import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioIconComponent } from './prio-icon.component';

describe('PrioIconComponent', () => {
  let component: PrioIconComponent;
  let fixture: ComponentFixture<PrioIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrioIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
