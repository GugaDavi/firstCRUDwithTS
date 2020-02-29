import { Router } from 'express'

import ProjectController from './controllers/ProjectController'
import TaskController from './controllers/TaskController'

import projectMiddleware from './middlewares/project_exist'
import globalMiddleware from './middlewares/global_middleware'

const routes = Router()

routes.use(globalMiddleware)

routes.get('/projects', ProjectController.index)
routes.post('/projects', ProjectController.store)

routes.put('/projects/:id', projectMiddleware, ProjectController.update)
routes.delete('/projects/:id', projectMiddleware, ProjectController.destroy)

routes.get('/projects/:id/tasks', projectMiddleware, TaskController.index)
routes.post('/projects/:id/tasks', projectMiddleware, TaskController.store)

export default routes
