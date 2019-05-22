import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { TestBed } from '@angular/core/testing';
import { bindCallback } from 'rxjs';
@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.css']
})
export class EnergyComponent implements OnInit {

  options: any ={};
  constructor() {
    console.log(echarts);
   }
  
  ngOnInit() {

    this.initCharts();

  }
  initCharts(){
    const ec:any = echarts;
    let lineChart = ec.init(document.getElementById('lineChart'))
    let lineChartOption = {
      title : {
        text : '能源（水气热）'
      },
      backgroundColor : 'white',
      tooltip : {
        trigger: 'none'
      },
      toolbox: {
          show : false,
      },
      legend:{
          padding:0
      },
      xAxis : [
          {
              type : 'category',
              boundaryGap : false,
              data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
          }
      ],
      yAxis : [
          {
              type : 'value'
          }
      ],
      series : [
          {
              name:'水',
              type:'line',
              smooth:true,
              itemStyle : {
                  normal : {
                      lineStyle:{
                          color:'#c8c8c8'
                      }
                  }
              },
              data:[10, 2, 5, 4, 6, 3, 7,2,2,3,6,7],

          },
          {
              name:'气',
              type:'line',
              smooth:true,
              itemStyle: {
                  normal : {
                      lineStyle:{
                          color:'#1ab394'
                      }
                  }
              },
              data:[3, 2, 4, 7, 0, 3, 1,3,4,1,2,3]
          },
          {
              name:'热',
              type:'line',
              smooth:true,
              itemStyle: {
                  normal : {
                      lineStyle:{
                          color:'#ff713a'
                      }
                  }
              },
              data:[10, 2, 6, 3, 2, 9, 10,3,4,8,4,3]
          }
      ],
    };
    lineChart.setOption(lineChartOption);
  }

}
