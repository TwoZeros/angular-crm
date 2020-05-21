import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthorisationService } from 'src/shared/services/authorisation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private AuthorizationSerive: AuthorisationService) { }
logout() {
  this.AuthorizationSerive.logout();
}
  ngOnInit() { }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
