import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DemoDataProviderService } from '../demo-data-provider.service';
import { Subscription } from 'rxjs';
import { DashboardResourceService } from '../../../shared/services/dashboardResource.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, AfterViewInit {

  subscription: Subscription;
data:any;







  constructor(private dataService_: DemoDataProviderService,
    private spinner: NgxSpinnerService,
    private DashboardResourceService: DashboardResourceService) {
    //  this.subscription = this.dataService_.dataSetChanged$.subscribe(
    //    dataSet => this.chart.data(this.dataService_.getData(dataSet))
    //  );
  }


  @ViewChild('chartContainer') container;
 

  ngOnInit() {
    this.spinner.show();

    this.DashboardResourceService.getAllResource().subscribe(data=>{
      this.data =data;
      let chart = anychart.resource(this.data);
      console.log(this.data);
      //chart.currentStartDate('2016-10-05');
      chart
        .zoomLevel(0)
        .timeTrackingMode('activity-per-resource')
       

      chart.calendar().availabilities([
        {
          each: 'day',
          from: 8,
          to: 18,
          isWorking: true
        }
      ]);

      chart.logo().fill({
        src: 'https://cdn.anychart.com/images/resource-chart/logo.png'
      });

      var resourceList = chart.resourceList();
      resourceList.types({
        fontColor: '#4CAF50',
        fontSize: 12
      });

      // Set images settings.
      resourceList.images().size(85);

      // Set tags settings.
      resourceList.tags().background('#70d0f5').fontColor('#fff');
      chart.container('chart-container');
      chart.draw();
      this.spinner.hide();
    });
  

  
    }


  

  ngAfterViewInit() {
  
  }

}
