import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotJopsComponent } from './hot-jops.component';

describe('HotJopsComponent', () => {
  let component: HotJopsComponent;
  let fixture: ComponentFixture<HotJopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HotJopsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotJopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
