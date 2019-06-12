import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-power-grid',
  templateUrl: './power-grid.component.html',
  styleUrls: ['../index.component.css']
})
export class PowerGridComponent implements OnInit {

  options: any ={};
  constructor() {
    //console.log(echarts);
   }
  
  ngOnInit() {

    this.initCharts();

  }
  initCharts(){
    const ec:any = echarts;
    let barChart = ec.init(document.getElementById('barChart'));
    let barChartOption = {
      title: {
        text: '数据对比',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['上月', '本月']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['收入','燃料','热','气','水','电力']
    },
    series: [
        {
            name: '上月',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
            name: '本月',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
    ],
    };
    barChart.setOption(barChartOption);
  }
}
