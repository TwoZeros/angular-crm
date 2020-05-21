import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  @Input() info: any = [];

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Статистика заведения новых клиентов'
      },
      xAxis: {
        categories: this.info.date,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Количество (шт)'
        }
    },
   
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Новые клиенты',
        data: this.info.count

    }]
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}
