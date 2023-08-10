import knex from "knex"
import { DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_USERNAME } from "../config.js"

export let db

export async function initializeDatabase() {
  db = knex({
    client: "mysql2",
    connection: {
      host: DATABASE_HOST,
      user: DATABASE_USERNAME,
      password: DATABASE_PASSWORD,
      database: DATABASE_NAME,
    },
  })
}

export async function destroyDatabase() {
  if (db) db.destroy()
}
