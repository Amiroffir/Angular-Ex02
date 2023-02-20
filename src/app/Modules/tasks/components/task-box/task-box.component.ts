import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../Models/task.interface';
import { TaskStatus } from '../../Models/task.interface';

@Component({
  selector: 'app-task-box',
  templateUrl: './task-box.component.html',
  styleUrls: ['./task-box.component.less'],
})
export class TaskBoxComponent {
  constructor() {}
  @Input() task: ITask = {
    id: 0,
    title: '',
    description: '',
    status: TaskStatus.NotStarted,
  };

  @Output() checkboxClick: EventEmitter<number> = new EventEmitter<number>();
  @Output() checkboxDblClick: EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteClick: EventEmitter<number> = new EventEmitter<number>();

  public contentEditable: boolean = false;

  public onTitleChange(event: Event) {
    console.log((event.target as HTMLInputElement).value);
    this.task.title = (event.target as HTMLInputElement).value;
    console.log(this.task);
    this.contentEditable = false;
  }
  public onDescriptionChange(event: Event) {
    console.log((event.target as HTMLInputElement).value);
    this.task.description = (event.target as HTMLInputElement).value;
    this.contentEditable = false;
  }
  public getTaskStatus(): string {
    switch (this.task.status) {
      case TaskStatus.NotStarted:
        return '';
      case TaskStatus.InProgress:
        return 'InProgress';
      case TaskStatus.Completed:
        return 'Completed';
      default:
        return '';
    }
  }
  public onDeleteClick(id: number) {
    this.deleteClick.emit(id);
  }
  public onEditClick() {
    this.contentEditable = true;
  }
  public onCheckboxClick(id: number) {
    this.checkboxClick.emit(id);
  }
  public onCheckboxDblClick(id: number) {
    this.checkboxDblClick.emit(id);
  }
}
