
import { Router } from 'express'
import * as cookieParser from 'cookie-parser'

export const UnsecuredRouter = (): Router => {
  const defaultUnsecuredRouter = Router()


  return defaultUnsecuredRouter
}

export const SecuredRouter = (): Router => {
  const defaultSecuredRouter = UnsecuredRouter()
  defaultSecuredRouter.use(cookieParser())

  return defaultSecuredRouter
} 