import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'ngx-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['../index.component.css']
})
export class PieComponent implements OnInit {

  options: any ={};
  constructor() {
    //console.log(echarts);
   }
  
  ngOnInit() {

    this.initCharts();

  }
  initCharts(){
    const ec:any = echarts;
    let pieChart = ec.init(document.getElementById('pieChart'))
    let pieChartOption = {
      title : {
        text : 'XXXXXX'
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
      series : [
          {
              name:'数据',
              type:'pie',
              smooth:true,
              itemStyle : {
                  normal : {
                      lineStyle:{
                          color:'#c8c8c8'
                      }
                  }
              },
              data:[{
                name:'#1',
                value:10
              },{
                name:'#2',
                value:20
              },{
                name:'#3',
                value:70
              }],

          }
      ],
    };
    pieChart.setOption(pieChartOption);
  }
}
