import { Component, OnInit } from '@angular/core';
import {AuthorisationService} from '../../../shared/services/authorisation.service'
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  isLoginedUser:boolean;
  isNotLoginedUser:boolean;
  constructor(private AuthorisationService: AuthorisationService) { }
  ngOnInit(): void {
   this.updateMenu();
  }
  logout() {
    
    this.AuthorisationService.logout();
    this.updateMenu();
  }
  updateMenu() :void {
    this.isLoginedUser = this.AuthorisationService.isLoginedUser();
    this.isNotLoginedUser = !this.isLoginedUser;
  }

}
