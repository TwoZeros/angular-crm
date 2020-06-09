import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DemoDataProviderService } from '../demo-data-provider.service';
import { Subscription } from 'rxjs';
import { DashboardResourceService } from '../../../shared/services/dashboardResource.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgForm } from '@angular/forms';
import { SkillsService } from '../../../shared/services/skills.service';
import {FormControl} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProjectWorkAddComponent } from '../../modules/projectwork-add/projectwork-add.component';
import { ProjectWorkUpdateComponent } from '../../modules/projectwork-update/projectwork-update.component';

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


  createWork(): void {
    const dialogRef = this.dialog.open(ProjectWorkAddComponent, {
      width: '550px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this.onFind(null);
    });
  }
getSkills() {
  this.skillServive.getSkills().subscribe(res=>this.skills = res);
}

  constructor(private dataService_: DemoDataProviderService,
    private spinner: NgxSpinnerService,
    private skillServive : SkillsService,
    private DashboardResourceService: DashboardResourceService,
    public dialog: MatDialog) {
    //  this.subscription = this.dataService_.dataSetChanged$.subscribe(
    //    dataSet => this.chart.data(this.dataService_.getData(dataSet))
    //  );
  }


  @ViewChild('chartContainer') container;
 
  onFind(form: NgForm){
    var that = this;
    if(!this.dataStart || !this.dataEnd) {
      this.data = this.DashboardResourceService.getAllResource().subscribe(data=>{
         var that = this;
      this.createChart(data, that);
      });
     
    }

    if(this.selectedSkill.value!=null &&this.selectedSkill.value.length!=0) {
      this.DashboardResourceService.findByPeriodAndSkill(
        this.dataStart.toISOString().slice(0,10),
        this.dataEnd.toISOString().slice(0,10),
        this.selectedSkill.value
      ).subscribe(data=>{
        this.createChart(data,that);
      })
    }
    else {

      this.DashboardResourceService.findByPeriod(
        this.dataStart.toISOString().slice(0,10),
         this.dataEnd.toISOString().slice(0,10)).subscribe(data=> {
          this.data =data;
             this.createChart(this.data,that); 
            })
    
      }
 
}

createChart(data, that) {
  
  document.querySelector('div#chart-container').innerHTML = "";
  this.spinner.show();
  let chart = anychart.resource(data);
      console.log(this.data);
      //chart.currentStartDate('2016-10-05');
      chart
        .zoomLevel(1)
        .timeTrackingMode('activity-per-resource');
       
      chart.resourceListWidth(190);
      chart.calendar().availabilities([
        {
          each: 'day',
          from: 8,
          to: 18,
          isWorking: true
        }
      ]);
  

      chart.logo().fill({
        src: 'https://psv4.userapi.com/c856532/u143709092/docs/d1/ac258d702886/logo2.jpg?extra=RPp7SIm6_XEzkG01KzpeNY_VJkoNqmYoUJA_liKPde5viZJXlUBDPxl79PwC5_HEumwhmyZJOLT-gC8OrhJ2KRgCdhMLxHs8tLeHRpwQQHE8F94X9iSPS9ptaqykUgSZCP2BJCVI78XCRf6D'
      });
       // Currently selected tree data item
       var selectedItem;
       var activities = chart.activities();
      
      var resourceList = chart.resourceList();
      resourceList.types({
        fontColor: '#4CAF50',
        fontSize: 12
      });
      chart.listen('pointClick', function(e) {
       // this.ProjectWorkAddComponent.updateProjectWork();
        const dialogRef = that.dialog.open(ProjectWorkUpdateComponent, {
          width: '500px',
          data: {id : e['data']['projectWorkId']}
        });
      
        dialogRef.afterClosed().subscribe(result => {
          that.onFind(null);
        });
      });
      // Set images settings.
      resourceList.images().size(50);
      
      // Set tags settings.
      resourceList.tags().background('#70d0f5').fontColor('#fff');
      chart.container('chart-container');
      
      chart.draw();
      this.spinner.hide();

    }
updateProjectWork(id :number): void {
  
}
  ngOnInit() {
    
    this.spinner.show();
this.getSkills();
    this.DashboardResourceService.getAllResource().subscribe(data=>{
      this.data =data;
      var that = this;
    this.createChart(this.data, that);
      
    });
    

  
    };
   
  

  ngAfterViewInit() {
  
  }

}
