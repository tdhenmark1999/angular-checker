import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckerDetailsComponent } from './checker-details.component';

describe('CheckerDetailsComponent', () => {
  let component: CheckerDetailsComponent;
  let fixture: ComponentFixture<CheckerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
