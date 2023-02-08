import { TodoStatus } from "./todo-status.enum.ts";

export interface Todo {
  id: number;
  text: string;
  status: TodoStatus;
}
