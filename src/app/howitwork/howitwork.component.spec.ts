import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowitworkComponent } from './howitwork.component';

describe('HowitworkComponent', () => {
  let component: HowitworkComponent;
  let fixture: ComponentFixture<HowitworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowitworkComponent]
    });
    fixture = TestBed.createComponent(HowitworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
