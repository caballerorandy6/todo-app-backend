import { Router } from "express";
import {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleTask,
  getTask,
} from "../controllers/task.controllers";

const router = Router();

// Define los endpoints
router.get("/", getAllTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.patch("/:id/toggle", toggleTask);
router.get("/:id", getTask);

export default router;
