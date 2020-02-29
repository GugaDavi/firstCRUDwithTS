import { Router } from 'express'

import ProjectController from './controllers/ProjectController'
import TaskController from './controllers/TaskController'

const routes = Router()

routes.get('/projects', ProjectController.index)
routes.post('/projects', ProjectController.store)
routes.put('/projects/:id', ProjectController.update)
routes.delete('/projects/:id', ProjectController.destroy)

routes.get('/projects/:id/tasks', TaskController.index)
routes.post('/projects/:id/tasks', TaskController.store)

export default routes
