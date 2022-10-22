import {TaskList} from "./interface/interface";

export const tasksStore:TaskList [] = [
  {
    id: 1/*Date.now()*/,
    title: "task1",
    description: "learn ng",
    date: "2022-10-12",
    open: false
  },
  {
    id: 2/*Date.now()*/,
    title: "task2",
    description: "learn ts",
    date: "2022-10-12",
    open: false
  },
  {
    id: 3/*Date.now()*/,
    title: "task3",
    description: "learn ngrx",
    date: "2022-10-12",
    open: false
  },
];
