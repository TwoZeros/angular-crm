import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-raiting-client-chart',
  templateUrl: './rating-client-chart.component.html',
  styleUrls: ['./rating-client-chart.component.css']
})
export class RaitingClientChartComponent implements OnInit {

  chartOptions: {};
  @Input() data: any = [];
  @Input() nameClient: string;

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Рейтинг клиента'
      }, 
      xAxis: {
        categories: this.data.date
    },
      yAxis: {
        title: {
            text: 'Карма (Ед.)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
      name: this.nameClient,
      data: this.data.value
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
