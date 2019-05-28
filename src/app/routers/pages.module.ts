import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NbDialogModule, NbWindowModule} from "@nebular/theme";
import {IndexModule} from './index/index.module'

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    Ng2SmartTableModule,
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    IndexModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  entryComponents:[
  ],
})
export class PagesModule {
}
