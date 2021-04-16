

import express from 'express'
import compression from 'compression'
import parser from 'body-parser'

import { Request, Response } from 'express'
import { ApiRouter } from './api'
import { Config } from './config'

const { port, STATIC_FILE_PATH, REACT_APP_URL_PATH } = Config
const path = require('path')
const app = express()

//server config 
app.use(compression({ level: 9 }))
app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))
app.use(`${REACT_APP_URL_PATH}/api`, ApiRouter())  //<JPH> other projectshave SecuredApiRouter here..

if(process.env.NODE_ENV === 'production'){
  //serve static files from dist
  app.use(REACT_APP_URL_PATH,express.static('dist'))
  
  //for every route request, send back index.html which
  //references the bundle.js file that handles the client-side routing
  app.get('*', (req: Request, res: Response): void => {
    res.sendFile(path.resolve(STATIC_FILE_PATH, 'index.html'))
  })
}

app.listen(port, () => {
  console.log(`front-end server listening on port:${port}`)
})