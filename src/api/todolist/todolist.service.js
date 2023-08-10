import { getDateByZonedTime } from "../../utils/date"

export class TodolistService {
  constructor(todolistRepository) {
    this.todolistRepository = todolistRepository
  }

  findAll({ certDate, cursorId, limit }) {
    const currDate = certDate
      ? certDate
      : getDateByZonedTime(new Date(), "yyyy-MM-dd", "Asia/Seoul")

    return this.todolistRepository.findAll({ certDate: currDate, cursorId, limit })
  }

  findById(todoId) {}

  save(todoName, certDate) {}

  update({ todoId, todoName, certDate, isChecked }) {}

  delete(todoId) {}
}
