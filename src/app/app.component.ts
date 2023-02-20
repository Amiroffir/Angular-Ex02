import { Component } from '@angular/core';
import { tasksRoutes } from './constants/routes.constant';
import { LayoutService } from './services/Layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'angular-ex02';
  public tasksRoutes = tasksRoutes;

  constructor(public layoutService: LayoutService) {
    this.layoutService.headerTitle = 'Welcome to ex02';
  }
}
