import { Request, Response } from "npm:express";
import { TodosService } from "../services/todos.service.ts";

const todosService = new TodosService("todos");

export const getHealthCheck = (_req: Request, res: Response) => {
  return res.status(200).send();
};

export const getTodos = async (_req: Request, res: Response) => {
  const todos = await todosService.getAllTodos();
  return res.status(200).send(todos);
};

export const putTodos = async (req: Request, res: Response) => {
  await todosService.addTodo(req.body);
  return res.status(201).send(req.body);
};

export const postTodos = async (req: Request, res: Response) => {
  await todosService.updateTodo(req.body);
  return res.status(201).send(req.body);
};

export const deleteTodos = async (req: Request, res: Response) => {
  await todosService.deleteTodo(req.body);
  return res.status(200).send(req.body);
};
