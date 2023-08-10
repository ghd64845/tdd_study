export const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500
  const errMessage = err.message

  res.status(status).send({
    success: 0,
    errMessage,
  })

  next()
}
