import { TodoStatusEnum } from "./todo-status.enum.ts";

export interface ITodo {
  id: number;
  name: string;
  description: string;
  todo_status: TodoStatusEnum;
}

export interface IAddTodo {
  name: string;
  description: string;
}

export interface IUpdateTodo {
  id: number;
  name: string;
  description: string;
}

export interface IDeleteTodo {
  id: number;
}
