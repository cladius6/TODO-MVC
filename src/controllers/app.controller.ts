import { Request, Response } from "npm:express";

export const getHealthCheck = (_req: Request, res: Response) => {
  return res.status(200).send("");
};

export const getTodos = (_req: Request, res: Response) => {
  return res.status(200).send({
    todos: [],
  });
};
