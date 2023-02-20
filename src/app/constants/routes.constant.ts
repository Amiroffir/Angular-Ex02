export interface IMenuItem {
  route: string;
  title: string;
  showInMenu: boolean;
}

export class tasksRoutes {
  public static taskList: IMenuItem = {
    route: 'todo/list',
    title: 'My Tasks',
    showInMenu: true,
  };
  public static homePage: IMenuItem = {
    route: '',
    title: 'Home',
    showInMenu: true,
  };
}
