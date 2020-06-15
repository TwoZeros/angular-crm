import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  data = [
    {x: "A", value: 637166},
    {x: "B", value: 721630},
    {x: "C", value: 148662},
    {x: "D", value: 78662},
    {x: "E", value: 90000}
  ];
  chart;
  constructor() { }

  ngOnInit(): void {
    this.chart  = anychart.pie(this.data)
    this.chart.innerRadius('30%');
    this.chart.container('container');
    this.chart.draw();
  }

}
