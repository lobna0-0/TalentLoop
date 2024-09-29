import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanditatesComponent } from './canditates.component';

describe('CanditatesComponent', () => {
  let component: CanditatesComponent;
  let fixture: ComponentFixture<CanditatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CanditatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanditatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
