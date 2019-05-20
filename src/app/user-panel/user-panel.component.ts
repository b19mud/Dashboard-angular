import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})


export class UserPanelComponent implements OnInit {
  options: any ={};
  constructor() {
    //console.log(echarts);
   }
  
  ngOnInit() {
    //this.initCharts();
  }
  
}
