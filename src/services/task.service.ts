import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface CreateTask {
  title: string;
  color?: string;
}

interface UpdateTask {
  title?: string;
  color?: string;
  completed?: boolean;
}

//Get all tasks
export const getAllTasks = async () => {
  return await prisma.task.findMany();
};

//Create a new task
export const createTask = async (data: CreateTask) => {
  return await prisma.task.create({
    data: {
      title: data.title,
      color: data.color,
      completed: false,
    },
  });
};

//Update an existing task
export const updateTask = async (id: number, data: UpdateTask) => {
  return await prisma.task.update({
    where: { id },
    data,
  });
};

//Delete an existing task
export const deleteTask = async (id: number) => {
  return await prisma.task.delete({
    where: { id },
  });
};

// Toggle the completion status of a task
export const toggleTaskCompletion = async (id: number) => {
  // Primero obtenemos la tarea actual
  const task = await prisma.task.findUnique({
    where: { id },
  });

  if (!task) {
    throw new Error("Task not found");
  }

  // Change the completed status
  return await prisma.task.update({
    where: { id },
    data: {
      completed: !task.completed,
    },
  });
};

//Get a single task
export const getTask = async (id: number) => {
  return await prisma.task.findUnique({
    where: { id },
  });
};
