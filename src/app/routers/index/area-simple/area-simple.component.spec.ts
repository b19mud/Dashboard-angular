import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaSimpleComponent } from './area-simple.component';

describe('AreaSimpleComponent', () => {
  let component: AreaSimpleComponent;
  let fixture: ComponentFixture<AreaSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
