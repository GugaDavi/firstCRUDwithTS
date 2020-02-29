import { Request, Response, NextFunction } from 'express'

import { projects } from '../db/projects'
import ProjectModel from '../models/project_model'

export default (req: Request, res: Response, next: NextFunction): any => {
  const { id } = req.params

  let _projectExist: ProjectModel

  if (id) {
    _projectExist = projects.find((project) => project.id === Number(id))
  }

  if (!_projectExist) {
    return res.status(404).json({ error: 'Project Not Found' })
  }

  return next()
}
