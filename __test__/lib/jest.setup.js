import { destroyDatabase, initializeDatabase } from "../../src/lib/database"

beforeEach(async () => {
  await initializeDatabase()
})

afterEach(async () => {
  await destroyDatabase()
})
