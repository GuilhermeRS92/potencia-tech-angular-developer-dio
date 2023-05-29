import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeContainerComponent } from './subscribe-container.component';

describe('SubscribeContainerComponent', () => {
  let component: SubscribeContainerComponent;
  let fixture: ComponentFixture<SubscribeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
