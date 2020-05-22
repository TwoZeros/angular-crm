import { Component, OnInit } from '@angular/core';
import { AuthorisationService } from 'src/shared/services/authorisation.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userLogin;
  constructor(private AuthorizationService: AuthorisationService) { }

  ngOnInit(): void {
    this.userLogin = this.AuthorizationService.getLogin();
  }

}
