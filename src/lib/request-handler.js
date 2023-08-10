export const wrap = (handler) => async (req, res, next) => {
  try {
    const response = await handler(req, res, next)
    res.json({ success: 1, data: response })
    next()
  } catch (err) {
    next(err)
  }
}
