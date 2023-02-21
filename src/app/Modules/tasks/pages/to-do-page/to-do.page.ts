import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/Layout.service';
import { ITask, TaskStatus } from '../../Models/task.interface';
import { LocalStorageService } from '../../services/todo.service';

@Component({
  selector: 'app-to-do-page',
  templateUrl: './to-do.page.html',
  styleUrls: ['./to-do.page.less'],
})
export class ToDoPage implements OnInit {
  constructor(
    layoutService: LayoutService,
    private localStorageService: LocalStorageService
  ) {
    layoutService.headerTitle = 'My Tasks';
  }

  public originTasks: ITask[] = [];
  public tasks: ITask[] = [];
  public addTaskEnabled: boolean = true;

  ngOnInit(): void {
    let loadedTasks: string = this.localStorageService.get('tasks');
    this.originTasks = loadedTasks ? JSON.parse(loadedTasks) : [];
    this.tasks = this.originTasks;
  }

  public onSearch(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value;

    if (searchValue !== '' || searchValue === null) {
      this.addTaskEnabled = false;
      this.tasks = this.originTasks.filter((task) =>
        task.title.includes(searchValue)
      );
    } else {
      this.addTaskEnabled = true;
      this.tasks = this.originTasks;
    }
  }
  public onDeleteClick(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.originTasks = this.originTasks.filter((task) => task.id !== id);
    this.localStorageService.set('tasks', this.originTasks);
  }
  public onSaveClick() {
    this.localStorageService.set('tasks', this.originTasks);
  }
  public onAddTaskClick() {
    let nextID =
      this.originTasks.length > 0
        ? this.originTasks[this.originTasks.length - 1].id + 1
        : 1;
    const newTask: ITask = {
      id: nextID,
      title: 'New Task',
      description: 'New Description',
      status: TaskStatus.NotStarted,
    };
    this.originTasks.push(newTask);
    this.localStorageService.set('tasks', this.originTasks);
  }
  public onCheckboxClick(id: number) {
    const task = this.originTasks.find((task) => task.id === id);
    if (task) {
      switch (task.status) {
        case TaskStatus.NotStarted:
          task.status = TaskStatus.Completed;
          break;
        case TaskStatus.InProgress:
          task.status = TaskStatus.Completed;
          break;
        case TaskStatus.Completed:
          task.status = TaskStatus.NotStarted;
          break;
        default:
          break;
      }
    }
  }
  public onCheckboxDblClick(id: number) {
    const task = this.originTasks.find((task) => task.id === id);
    if (task) {
      switch (task.status) {
        case TaskStatus.NotStarted:
          task.status = TaskStatus.InProgress;
          break;
        case TaskStatus.InProgress:
          task.status = TaskStatus.NotStarted;
          break;
        case TaskStatus.Completed:
          task.status = TaskStatus.InProgress;
          break;
        default:
          break;
      }
    }
  }
}
