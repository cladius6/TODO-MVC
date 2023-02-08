import { Request, Response } from "npm:express";
import { TodoStatus } from "../models/todo-status.enum.ts";
import { Todos } from "../models/todos.ts";

export const getHealthCheck = (_req: Request, res: Response) => {
  return res.status(200).send("");
};

export const getTodos = (_req: Request, res: Response) => {
  // Todos.getinstance().addTodo({
  //   id: 1,
  //   text: "Make this app",
  //   status: TodoStatus.Todo,
  // });
  return res.status(200).send(Todos.getinstance());
};
