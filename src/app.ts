import express from 'express'
import cors from 'cors'

import Routes from './routes'

class App {
  public express: express.Application;

  constructor () {
    this.express = express()
    this.middlewares()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private routes (): void {
    this.express.use(Routes)
  }
}

export default new App().express
