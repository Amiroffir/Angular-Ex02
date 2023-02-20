import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem, tasksRoutes } from 'src/app/constants/routes.constant';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
})
export class MenuComponent implements OnInit {
  constructor(private router: Router) {}

  @Input() routes: tasksRoutes | undefined = undefined;

  public menuItems: IMenuItem[] = [];

  public ngOnInit(): void {
    for (const key in this.routes) {
      const menuItem: IMenuItem = (this.routes as any)[key];

      if (menuItem.showInMenu) {
        if (menuItem.route === '') {
          this.menuItems.unshift(menuItem);
        } else this.menuItems.push(menuItem);
      }
    }
  }

  public onMenuClick(item: string): void {
    this.router.navigate([item]);
  }
}
