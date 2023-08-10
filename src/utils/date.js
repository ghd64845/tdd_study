import { utcToZonedTime } from "date-fns-tz"
import dateFns from "date-fns"

export const formatDate = (date, format, options) => {
  return dateFns.format(date, format, ...options)
}

export const getDateByZonedTime = (date, format, timeZone) => {
  const convertedDate = utcToZonedTime(date, timeZone)
  return formatDate(convertedDate, format)
}
