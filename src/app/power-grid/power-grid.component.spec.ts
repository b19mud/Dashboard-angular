import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerGridComponent } from './power-grid.component';

describe('PowerGridComponent', () => {
  let component: PowerGridComponent;
  let fixture: ComponentFixture<PowerGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
