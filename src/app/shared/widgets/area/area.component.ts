import { Component, OnInit, Input } from '@angular/core';
import HC_exporting from 'highcharts/modules/exporting';



declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');
let Gantt = require('highcharts/modules/gantt');

// Boost(Highcharts);


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  @Input() info: any = [];
  constructor() { }
  ngOnInit() {
    
}
}
