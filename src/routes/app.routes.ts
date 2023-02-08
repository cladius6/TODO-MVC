import { Router } from "npm:express";
import { getHealthCheck } from "../controllers/app.controller.ts";

const router = Router();

router.get("/health-check", getHealthCheck);

export default router;
