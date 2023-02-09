import {
  deleteTodos,
  getHealthCheck,
  getTodos,
  postTodos,
  putTodos,
} from "../controllers/app.controller.ts";
import swaggerUi from "npm:swagger-ui-express";
import swaggerDocument from "../swagger/swagger.json" assert { type: "json" };
import { Request, Response, NextFunction, Router } from "npm:express";
import { extendZodWithOpenApi } from "npm:@asteasolutions/zod-to-openapi";
import { z, AnyZodObject } from "https://deno.land/x/zod@v3.20.5/mod.ts";

extendZodWithOpenApi(z);

export const validate =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      return res.status(400).json(error);
    }
  };

export const AddTodo = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
    description: z.string().optional(),
  }),
});

export const UpdateTodo = z.object({
  body: z.object({
    id: z.number({ required_error: "Id is required." }),
    name: z.string({
      required_error: "Name is required",
    }),
    description: z.string().optional(),
  }),
});

export const DeleteTodo = z.object({
  body: z.object({
    id: z.number({ required_error: "Id is required." }),
  }),
});

const router = Router();

router.get("/health-check", getHealthCheck);
router.get("/todos", getTodos);
router.post("/todos", validate(UpdateTodo), postTodos);
router.put("/todos", validate(AddTodo), putTodos);
router.delete("/todos", validate(DeleteTodo), deleteTodos);

router.use("/swagger", swaggerUi.serve);
router.get("/swagger", swaggerUi.setup(swaggerDocument));

export default router;
