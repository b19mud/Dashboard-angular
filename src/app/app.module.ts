import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { EnergyComponent } from './energy/energy.component';
import { EquipPanelComponent } from './equip-panel/equip-panel.component';
import { CostComponent } from './cost/cost.component';
import { PowerGridComponent } from './power-grid/power-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPanelComponent,
    EnergyComponent,
    EquipPanelComponent,
    CostComponent,
    PowerGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
