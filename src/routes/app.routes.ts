import { Router } from "npm:express";
import {
  getHealthCheck,
  getTodos,
  postTodos,
} from "../controllers/app.controller.ts";
import swaggerUi from "npm:swagger-ui-express";
import swaggerDocument from "../swagger/swagger.json" assert { type: "json" };

const router = Router();

router.get("/health-check", getHealthCheck);
router.get("/todos", getTodos);
router.post("/todos", postTodos);

router.use("/swagger", swaggerUi.serve);
router.get("/swagger", swaggerUi.setup(swaggerDocument));

export default router;
