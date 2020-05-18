import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-layout',
  templateUrl: './setting-layout.component.html',
  styleUrls: ['./setting-layout.component.css']
})
export class SettingLayoutComponent implements OnInit {


  sideBarOpen = true;

  constructor() { }

  ngOnInit() { }


  sideBarToggler(event) {
    this.sideBarOpen = !this.sideBarOpen;
  }
  

}
