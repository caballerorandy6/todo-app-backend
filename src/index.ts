import express from "express";
import cors from "cors";
import taskRoutes from "./routes/task.routes";

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/tasks", taskRoutes);

// Server Initialization
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
