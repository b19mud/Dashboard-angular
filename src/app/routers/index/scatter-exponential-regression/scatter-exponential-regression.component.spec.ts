import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterExponentialRegressionComponent } from './scatter-exponential-regression.component';

describe('ScatterExponentialRegressionComponent', () => {
  let component: ScatterExponentialRegressionComponent;
  let fixture: ComponentFixture<ScatterExponentialRegressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScatterExponentialRegressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterExponentialRegressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
