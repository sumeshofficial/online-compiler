import express from "express";
import { executeCode } from "../controllers/execute.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import { executeCodeSchema } from "../validate/inputValidation.js";

const router = express.Router();

router.post("/", validate(executeCodeSchema), executeCode);

export default router;
