import { Request, Response, NextFunction } from 'express'

let requestCounter = 0

export default (req: Request, res: Response, next: NextFunction): void => {
  requestCounter++

  console.log(`Request Numbers: ${requestCounter}`)

  return next()
}
