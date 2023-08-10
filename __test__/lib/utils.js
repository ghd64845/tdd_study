import { App } from "../../src/app"
import { TodolistController } from "../../src/api/todolist/todolist.controller"

export function getServer() {
  const app = new App([new TodolistController()])

  return app.getServer
}
