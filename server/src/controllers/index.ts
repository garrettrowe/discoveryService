

import { Request, Response } from 'express'
import { Config } from '../config'
import qs from 'query-string'
import rp from 'request-promise-native'

import { getRedirectUrl } from '../config/config-utils'


// test call, exposed during dev for quick test that server is a-ok
export const onPostMessage = (req: Request, res: Response) => {
  res.send({
    status: 'success',
    message: 'ok'
  })
}