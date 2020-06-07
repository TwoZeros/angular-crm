import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DemoDataProviderService } from '../demo-data-provider.service';
import { Subscription } from 'rxjs';
import { DashboardResourceService } from '../../../shared/services/dashboardResource.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgForm } from '@angular/forms';
import { SkillsService } from '../../../shared/services/skills.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, AfterViewInit {
  
  subscription: Subscription;
  data:any;
  dataStart;
  dataEnd;
  selectedSkill = new FormControl();
  skills;



getSkills() {
  this.skillServive.getSkills().subscribe(res=>this.skills = res);
}

  constructor(private dataService_: DemoDataProviderService,
    private spinner: NgxSpinnerService,
    private skillServive : SkillsService,
    private DashboardResourceService: DashboardResourceService) {
    //  this.subscription = this.dataService_.dataSetChanged$.subscribe(
    //    dataSet => this.chart.data(this.dataService_.getData(dataSet))
    //  );
  }


  @ViewChild('chartContainer') container;
 
  onFind(form: NgForm){
  
    if(this.selectedSkill.value!=null &&this.selectedSkill.value.length!=0) {
      
      this.DashboardResourceService.findByPeriodAndSkill(
        this.dataStart.toISOString().slice(0,10),
        this.dataEnd.toISOString().slice(0,10),
        this.selectedSkill.value
      ).subscribe(data=>{
        this.createChart(data);
      })
    }
    else {

      this.DashboardResourceService.findByPeriod(
        this.dataStart.toISOString().slice(0,10),
         this.dataEnd.toISOString().slice(0,10)).subscribe(data=> {
          this.data =data;
             this.createChart(this.data); 
            })
    
      }
 
}
createChart(data) {
  document.querySelector('div#chart-container').innerHTML = "";
  this.spinner.show();
  let chart = anychart.resource(data);
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
       // Currently selected tree data item
       var selectedItem;
       var activities = chart.activities();
      
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
}
  ngOnInit() {
    
    this.spinner.show();
this.getSkills();
    this.DashboardResourceService.getAllResource().subscribe(data=>{
      this.data =data;
    this.createChart(this.data);
      
    });
  

  
    };


  

  ngAfterViewInit() {
  
  }

}
