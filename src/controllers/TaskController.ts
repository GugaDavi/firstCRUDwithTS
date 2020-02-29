import { Request, Response } from 'express'

import { projects } from '../db/projects'
import ProjectModel from '../models/project_model'

class TaskController {
  index (req: Request, res: Response): Response {
    const { id } = req.params

    const _project: ProjectModel = projects.find((project) => project.id === Number(id))

    return res.json({
      tasks: {
        projectName: _project.title,
        tasks: _project.tasks
      }
    })
  }

  store (req: Request, res: Response): Response {
    const { id } = req.params
    const { taskName } = req.body

    const _project: ProjectModel = projects.find((project) => project.id === Number(id))

    if (!_project) {
      return res.status(404).json({ error: 'Project Not Found' })
    }

    if (!taskName) {
      return res.status(404).json({ error: 'taskName is Required' })
    }

    _project.tasks.push(taskName)

    projects.filter((project) => project.id !== _project.id).push(_project)

    return res.json(_project)
  }
}

export default new TaskController()
