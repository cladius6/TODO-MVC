import { Router } from "npm:express";
import {
  getHealthCheck,
  getTodos,
  postTodos,
} from "../controllers/app.controller.ts";

const router = Router();

router.get("/health-check", getHealthCheck);
router.get("/todos", getTodos);
router.post("/todos", postTodos);

export default router;
