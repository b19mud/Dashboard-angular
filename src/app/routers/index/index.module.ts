import {NgModule} from '@angular/core';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NbDialogModule, NbWindowModule} from "@nebular/theme";
import {CostComponent} from "./cost/cost.component";
import {UserPanelComponent} from "./user-panel/user-panel.component";
import {PowerGridComponent} from "./power-grid/power-grid.component";
import {EquipPanelComponent} from "./equip-panel/equip-panel.component";
import {EnergyComponent} from "./energy/energy.component";
import {IndexComponent} from "./index.component";
import {PagesRoutingModule} from "../pages-routing.module";
import {ThemeModule} from "../../@theme/theme.module";
import { PieComponent } from './pie/pie.component';
import { ScatterComponent } from './scatter/scatter.component';
import { AreaSimpleComponent } from './area-simple/area-simple.component';
import { RadarComponent } from './radar/radar.component';
import { ParallelAqiComponent } from './parallel-aqi/parallel-aqi.component';
import { GaugeComponent } from './gauge/gauge.component';
import { BarStackComponent } from './bar-stack/bar-stack.component';
import { ScatterExponentialRegressionComponent } from './scatter-exponential-regression/scatter-exponential-regression.component';

const PAGES_COMPONENTS = [
  CostComponent,
  UserPanelComponent,
  PowerGridComponent,
  EquipPanelComponent,
  EnergyComponent,
  IndexComponent
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    Ng2SmartTableModule,
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    PieComponent,
    ScatterComponent,
    AreaSimpleComponent,
    RadarComponent,
    ParallelAqiComponent,
    GaugeComponent,
    BarStackComponent,
    ScatterExponentialRegressionComponent,
  ],
  entryComponents:[
  ],
})
export class IndexModule {
}
