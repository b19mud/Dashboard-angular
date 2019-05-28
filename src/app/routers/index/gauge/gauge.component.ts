import { Component, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'ngx-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['../index.component.css']
})
export class GaugeComponent implements OnInit {
  @Input()
  target: string

  options: any ={};
  constructor() {
    //console.log(echarts);
   }
  
  ngOnInit() {
    setTimeout(()=>{
      this.initCharts();
    })
    

  }
  initCharts(){
    const ec:any = echarts;
    //console.log('target',this.target)
    let gaugeChart = ec.init(document.getElementById(`${this.target}`));
    

    let gaugeChartOption = {
      tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter:'{value}%'},
            data: [{value: 30, name: '完成率'}]
        }
    ]
    };
    gaugeChart.setOption(gaugeChartOption);
  }
}
