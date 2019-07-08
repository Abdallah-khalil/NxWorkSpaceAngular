import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioInputComponent } from './prio-input.component';

describe('PrioInputComponent', () => {
  let component: PrioInputComponent;
  let fixture: ComponentFixture<PrioInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrioInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
