import { Request, Response } from "express";
import * as taskService from "../services/task.service";

// Get all tasks
export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error getting tasks", error });
  }
};

// Create a new task
export const createTask = async (req: Request, res: Response) => {
  const { title, color } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  try {
    const newTask = await taskService.createTask({ title, color });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Error creating task", error });
  }
};

// Update an existing task
export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const updatedTask = await taskService.updateTask(Number(id), data);
    res.status(200).json(updatedTask);
  } catch (error) {
    // Prisma throws an error if it doesn't find the record to update
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      (error as any).code === "P2025"
    ) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(500).json({ message: "Error updating task", error });
  }
};

// Delete a task
export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await taskService.deleteTask(Number(id));
    res.status(204).send(); // 204 No Content
  } catch (error) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      (error as any).code === "P2025"
    ) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(500).json({ message: "Error deleting task", error });
  }
};

// Toggle task completion
export const toggleTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const updatedTask = await taskService.toggleTaskCompletion(Number(id));
    res.status(200).json(updatedTask);
  } catch (error) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      (error as any).code === "P2025"
    ) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(500).json({ message: "Error toggling task", error });
  }
};

// Get a single task
export const getTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const task = await taskService.getTask(Number(id));
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Error getting task", error });
  }
};
