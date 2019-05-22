import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-power-grid',
  templateUrl: './power-grid.component.html',
  styleUrls: ['./power-grid.component.css']
})
export class PowerGridComponent implements OnInit {

  options: any ={};
  constructor() {
    console.log(echarts);
   }
  
  ngOnInit() {

    this.initCharts();

  }
  initCharts(){
    const ec:any = echarts;
    let barChart = ec.init(document.getElementById('barChart'))
    let barChartOption = {
      title : {
        text : '电力'
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
      coordinateSystem:'cartesian2d',
      xAxis : [
          {
              type : 'category',
              boundaryGap : true,
              
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
              name:'电力值',
              type:'bar',
              smooth:true,
              color:'rgb(0,147,157)',
              barWidth:25,
              data:[10, 2, 5, 4, 6, 3, 7,2,2,3,6,7],

          }
      ],
    };
    barChart.setOption(barChartOption);
  }
}
