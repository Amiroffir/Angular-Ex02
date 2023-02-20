import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskBoxComponent } from './components/task-box/task-box.component';
import { ToDoPage } from './pages/to-do-page/to-do.page';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { tasksRoutes } from 'src/app/constants/routes.constant';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    redirectTo: tasksRoutes.homePage.route,
    pathMatch: 'full',
  },
  {
    path: tasksRoutes.taskList.route,
    component: ToDoPage,
  },
];

@NgModule({
  declarations: [TaskBoxComponent, ToDoPage, MenuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
  ],
  exports: [TaskBoxComponent, ToDoPage, MenuComponent],
})
export class TasksModule {}
