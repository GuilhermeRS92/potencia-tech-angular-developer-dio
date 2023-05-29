import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeAWriterComponent } from './be-a-writer.component';

describe('BeAWriterComponent', () => {
  let component: BeAWriterComponent;
  let fixture: ComponentFixture<BeAWriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeAWriterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeAWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
