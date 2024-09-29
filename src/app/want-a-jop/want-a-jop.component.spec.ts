import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantAJopComponent } from './want-a-jop.component';

describe('WantAJopComponent', () => {
  let component: WantAJopComponent;
  let fixture: ComponentFixture<WantAJopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WantAJopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WantAJopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
