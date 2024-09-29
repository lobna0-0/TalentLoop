import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAJopComponent } from './post-a-jop.component';

describe('PostAJopComponent', () => {
  let component: PostAJopComponent;
  let fixture: ComponentFixture<PostAJopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostAJopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAJopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
