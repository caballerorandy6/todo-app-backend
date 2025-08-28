# Todo List API Backend 📝

This repository contains the backend for the Todo List application. It is a RESTful API built with **Express.js**, **TypeScript**, **Prisma**, and **MySQL**, designed to handle all Create, Read, Update, and Delete (CRUD) operations for tasks.

---

## Prerequisites 🛠️

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v18 or higher is recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A running instance of **MySQL** (either locally or via Docker)
- [Git](https://git-scm.com/)

---

## Installation 🚀

Follow these steps to set up the project in your local environment:

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/caballerorandy6/todo-app-backend.git]
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd backend-express
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

---

## Configuration ⚙️

1.  **Create an environment variables file:**
    Copy the `.env.example` file (if it exists) or create a new file named `.env` in the project root.

2.  **Set up the environment variables:**
    Add the following variables to your `.env` file. Be sure to replace the placeholder values with your actual database credentials.

    ```env
    # Database connection URL
    # Format: mysql://USER:PASSWORD@HOST:PORT/DATABASE_NAME
    DATABASE_URL="mysql://root:password@localhost:3307/todo-list-app"

    # Port for the Express server
    PORT=3001
    ```

    > **Note:** Port `3307` is common for specific setups or Docker configurations. If you have a standard MySQL installation, the port is likely `3306`. Please adjust accordingly.

---

## Database Setup 💾

1.  **Ensure your MySQL server is running** and that the database (e.g., `todo-list-app`) has been created.

2.  **Run the Prisma migrations:**
    This command will create the necessary tables in your database based on the schema defined in `prisma/schema.prisma`.
    ```bash
    npx prisma migrate dev
    ```

---

## Running the Application ▶️

Once everything is configured, you can start the server.

- **For development (with hot-reloading):**

  ```bash
  npm run dev
  ```

- **For production:**

  ```bash
  # 1. Build the TypeScript code into JavaScript
  npm run build

  # 2. Start the production server
  npm start
  ```

The server will be available at `http://localhost:3001`.

---

## API Endpoints 🌐

The API provides the following endpoints for managing tasks:

#### `GET /tasks`

- **Description:** Retrieves a list of all tasks.
- **Success Response (200):** `[{ "id": 1, "title": "...", ... }]`

#### `POST /tasks`

- **Description:** Creates a new task.
- **Request Body:** `{ "title": "New Task", "color": "blue" }`
- **Success Response (201):** `{ "id": 2, "title": "New Task", ... }`

#### `PUT /tasks/:id`

- **Description:** Updates an existing task by its ID.
- **Request Body:** `{ "title": "Updated Title", "completed": true, "color": "green" }`
- **Success Response (200):** `{ "id": 1, "title": "Updated Title", ... }`

#### `DELETE /tasks/:id`

- **Description:** Deletes a task by its ID.
- **Success Response (204):** No Content.
