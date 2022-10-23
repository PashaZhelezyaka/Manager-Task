export interface TaskList {
  id: number,
  title: string,
  description: string,
  date: string,
  open: boolean,
}

export interface SubmitTask {
  title: string,
  description: string,
  date: string,

}

export interface DataModalChangeWindow {
  task: TaskList,
  tasks: TaskList[]
}
