import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelAqiComponent } from './parallel-aqi.component';

describe('ParallelAqiComponent', () => {
  let component: ParallelAqiComponent;
  let fixture: ComponentFixture<ParallelAqiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallelAqiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallelAqiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
