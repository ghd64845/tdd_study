import { Router } from "express"
import { wrap } from "../../lib/request-handler.js"
import { TodolistService } from "./todolist.service.js"
import { TodolistRepository } from "./todolist.repository.js"

export class TodolistController {
  path = "/todolist"
  router = Router()

  todolistService = new TodolistService(new TodolistRepository())

  constructor() {
    this.initializeRoutes()
  }

  initializeRoutes() {
    const router = Router()

    router
      .get("/", wrap(this.getAllTodolist))
      .get("/:todoId", wrap(this.getTodoList))
      .post("/", wrap(this.createTodolist))
      .post("/:todoId/checked", wrap(this.checkTodolist))
      .post("/:todoId", wrap(this.updateTodolist))
      .delete("/:todoId")

    this.router.use(this.path, router)
  }

  getAllTodolist = async (req, res) => {
    const { certDate, cursorId, limit } = req.query

    return await this.todolistService.findAll({ certDate, cursorId, limit })
  }

  getTodoItem = async (req, res) => {
    const { todoId } = req.params

    return await this.todolistService.findById
  }

  createTodolist = async (req, res) => {
    const { todoName, certDate } = req.body

    return await this.todolistService.save({ todoName, certDate })
  }

  checkTodolist = async (req, res) => {
    const { todoId } = req.params

    return await this.todolistService.update({ todoId, isChecked: 1 })
  }

  updateTodolist = async (req, res) => {
    const { todoId } = req.params
    const { todoName, certDate, isChecked } = req.body

    return await this.todolistService.update({ todoId, todoName, certDate, isChecked })
  }

  deleteTodolist = async (req, res) => {
    const { todoId } = req.params

    return await this.todolistService.delete(todoId)
  }
}
