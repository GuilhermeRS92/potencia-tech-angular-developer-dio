import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMorePostsComponent } from './show-more-posts.component';

describe('ShowMorePostsComponent', () => {
  let component: ShowMorePostsComponent;
  let fixture: ComponentFixture<ShowMorePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMorePostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMorePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
