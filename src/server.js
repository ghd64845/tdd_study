import { TodolistController } from "./api/todolist/todolist.controller.js"
import { App } from "./app.js"
import { initializeDatabase } from "./lib/database.js"

async function startServer() {
  await initializeDatabase()

  const app = new App([new TodolistController()])

  app.listener()
}

startServer()
