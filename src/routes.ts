import { Router } from 'express'

import ProjectController from './controllers/ProjectController'

const routes = Router()

routes.get('/projects', ProjectController.index)
routes.post('/projects', ProjectController.store)
routes.put('/projects/:id', ProjectController.update)
routes.delete('/projects/:id', ProjectController.destroy)

export default routes
