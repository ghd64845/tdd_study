import express, { Router } from "express"
import bodyParser from "body-parser"
import { errorMiddleware } from "./middlewares/error.middleware.js"

export class App {
  app

  constructor(controllers) {
    this.app = express()

    this.initializeMiddlewares()
    this.initializeControllers(controllers)
    this.initializeErrorHandling()
  }

  listener() {
    const port = process.env.PORT || 3000
    this.app.listen(port, () => console.log(`server is listening on ${port}`))
  }

  getServer() {
    return this.app
  }

  initializeMiddlewares() {
    this.app.use(bodyParser.json())
  }

  initializeControllers(controllers) {
    const router = Router()

    router.get("/", (req, res) => res.json({ message: "OK" }))

    controllers.forEach((controller) => {
      router.use(controller.router)
    })

    this.app.use("/api", router)
  }

  initializeErrorHandling() {
    this.app.use(errorMiddleware)
  }
}
