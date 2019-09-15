import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { navOptions } from './components/common-utility/common-contant';
import { Role } from './models/common-models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ThinkByt-UI';
  isExpanded: boolean;
  isLogin: boolean;
  navBarOptions: any;

  constructor(private router: Router) {
    this.navBarOptions = navOptions.student_panel;
    this.routerEventsTrigger();
  }

  routerEventsTrigger() {
    this.router.events.subscribe(event => {
      if (window.location.href.indexOf('login') > -1) {
        this.isLogin = false;
      } else {
        this.isLogin = true;
      }

      const userType = localStorage.getItem('userType');
      switch (userType) {
        case Role.superAdmin:
          break;
        case Role.admin:
          break;
        case Role.teacher:
          break;
        case Role.student:
          break;
      }
    });
  }

  expandSidePanel(expanded: boolean) {
    this.isExpanded = expanded;
  }
}
