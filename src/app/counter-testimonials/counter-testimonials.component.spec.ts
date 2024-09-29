import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTestimonialsComponent } from './counter-testimonials.component';

describe('CounterTestimonialsComponent', () => {
  let component: CounterTestimonialsComponent;
  let fixture: ComponentFixture<CounterTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterTestimonialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
