

import { Router } from 'express'

import { onPostMessage } from '../controllers'

import { SecuredRouter, UnsecuredRouter } from './routers'

import { wdsInfo, wdsQuery, wdsAC, wdsFeedback } from '../controllers/discovery'
import { crawlDbpedia } from '../controllers/dbpedia_crawler'

export const ApiRouter = (): Router => {
  const router = Router()
  // app setup api
  router.post('/message', onPostMessage)

  // exposed methods for WDS
  router.post('/wdsInfo', wdsInfo)
  router.post('/wdsQuery', wdsQuery)
  router.post('/wdsAC', wdsAC)
  router.post('/wdsFeedback', wdsFeedback)
  router.post('/concept', crawlDbpedia)


  return router
}

