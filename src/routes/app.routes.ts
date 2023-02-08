import { Router } from "npm:express";
import { getHealthCheck, getTodos } from "../controllers/app.controller.ts";

const router = Router();

router.get("/health-check", getHealthCheck);
router.get("/todos", getTodos);

export default router;
