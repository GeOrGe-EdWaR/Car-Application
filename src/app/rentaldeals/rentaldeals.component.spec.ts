import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaldealsComponent } from './rentaldeals.component';

describe('RentaldealsComponent', () => {
  let component: RentaldealsComponent;
  let fixture: ComponentFixture<RentaldealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentaldealsComponent]
    });
    fixture = TestBed.createComponent(RentaldealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
