import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipPanelComponent } from './equip-panel.component';

describe('EquipPanelComponent', () => {
  let component: EquipPanelComponent;
  let fixture: ComponentFixture<EquipPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
