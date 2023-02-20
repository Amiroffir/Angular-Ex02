export enum TaskStatus {
  NotStarted = 0,
  InProgress = 1,
  Completed = 2,
}

export interface ITask {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}
