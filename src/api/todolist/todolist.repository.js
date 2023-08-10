import { db } from "../../lib/database.js"

export class TodolistRepository {
  defaultTable = "todolist"

  findAll({ certDate, cursorId, limit = 20 }) {
    return db(this.defaultTable)
      .where((builder) => {
        builder.where("cert_date", certDate)
        if (cursorId) builder.andWhere("id", "<", cursorId)
        return builder
      })
      .andWhere("is_deleted", 0)
      .orderBy("id", "desc")
      .limit(20)
  }

  findById(todoId) {}

  save(todoName, certDate) {}

  update({ todoId, todoName, certDate, isChecked }) {}

  delete(todoId) {}
}
