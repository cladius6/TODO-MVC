import { Request, Response } from "npm:express";
import { TodosService } from "../services/todos.service.ts";

const todosService = new TodosService();

export const getHealthCheck = (_req: Request, res: Response) => {
  return res.status(200).send();
};

export const getTodos = (_req: Request, res: Response) => {
  const todos = todosService.getAllTodos();
  return res.status(200).send(todos);
};

export const postTodos = (req: Request, res: Response) => {
  todosService.addTodo(req.body);
  return res.status(201).send(req.body);
};
