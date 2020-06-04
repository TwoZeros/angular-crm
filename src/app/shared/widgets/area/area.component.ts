import { Component, OnInit, Input } from '@angular/core';
import Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import gantChart from 'highcharts/highcharts-gantt'


declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');
let Gantt = require('highcharts/modules/gantt');

// Boost(Highcharts);

noData(Highcharts);
More(Highcharts);
noData(Highcharts);
Gantt(Highcharts)
@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  @Input() info: any = [];

  Highcharts  = Highcharts;
  constructor() { }
  ngOnInit() {
    var today = new Date(),
    day = 1000 * 60 * 60 * 24,
    map = Highcharts.map,
    dateFormat = Highcharts.dateFormat,
    series,
    cars;

// Set to 00:00:00:000 today
today.setUTCHours(0);
today.setUTCMinutes(0);
today.setUTCSeconds(0);
today.setUTCMilliseconds(0);
var now = today.getTime();
  
    this.chartOptions = {
      title: {
        text: 'График загрузки сотрудников'
    },
    chart: {
      
      styledMode:true,
    },
   
  navigator: {
      enabled: true,
      liveRedraw: true,
      series: {
          type: 'gantt',
          pointPlacement: 0.5,
          pointPadding: 0.25
      },
     
  },
  scrollbar: {
      enabled: true
  },
    subtitle: {
        text: 'Вся компания'
    },

    xAxis: {
      className:'highcharts-color-0',
        minPadding: 0.05,
        maxPadding: 1,
        currentDateIndicator: true

    },
  
    yAxis: {  
      className:'highcharts-color-0',
      currentDateIndicator: true,
      uniqueNames: true,
      grid:{
        
        borderWidth:1,
        cellHeight:150,
        columns:3,
        enabled:true
        },
        categories: ["<div>Пахтусов Кирилл</div><br> <div style='display:flex' ><div style='color:black'>С#</div> <div class='skill-box'>Java</div></div>",
        "<div>Пахтусов Кирилл</div><br> <div style='display:flex' ><div class='skill-box'>С#</div> <div class='skill-box'>Java</div></div>",]
            },
                


    tooltip: {
        outside: true
    },
    plotOptions: {
      gantt: {
          allowPointSelect: true,
          cursor: 'pointer',
          
          dataLabels: {
            
              enabled: true,
              format: '{point.spendTime}h-  <b>{point.name}</b><br>',
            
          }
      },
      series: {
        dataLabels: {
          useHTML:true,
          enabled: true,
          format: '<h2>test</h2>',
      }
    },
  },
    series: [{
        name: 'Project 1',
        data: [{
          name: 'Krox',
            start: now,
            end: now +day,
            y: 0,
            assignee: 'JonArild',
            spendTime:8,
        }, {
          name: 'Krox',
          start: now,
          end: now +day,
            y: 0,
            assignee: 'Oystein',
            fontSymbol: 'exclamation',
            spendTime:8,
        }, {
          name: 'Krox',
          start: now+ day,
          end: now +2*day,
            y: 2,
            assignee: 'Torstein',
            spendTime:4,
        }, {
          name: 'Krox',
          start: now+5 *day,
          end: now +7*day,
            y: 1,
            assignee: 'JonArild',
            spendTime:8,
        }, {
          name: 'Start prototype',
          start: now+ day,
          end: now +2*day,
            y: 2,
            assignee: 'Torstein',
            fontSymbol: 'smile-o',
            spendTime:8,
        }],
        
    }]
    };
   Highcharts.ganttChart('container', this.chartOptions);
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}
