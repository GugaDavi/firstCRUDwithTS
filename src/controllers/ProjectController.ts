import { Request, Response } from 'express'

import { projects } from '../db/projects'

import ProjectModel from '../models/project_model'

class ProjectController {
  index (_, res: Response): Response {
    return res.json({ projects: projects })
  }

  store (req: Request, res: Response): Response {
    const { id, title, tasks } = req.body

    if (!id || !title || !tasks) {
      return res.status(404).json({ mensage: 'To create the Project, you need to pass: id, title and tasks' })
    }

    const newProject = new ProjectModel(id, title, tasks)

    projects.push(newProject)

    return res.json(newProject)
  }

  update (req: Request, res: Response): Response {
    const { id } = req.params
    const { title } = req.body

    if (!title) {
      return res.status(400).json({ mensage: 'Title not Found' })
    }

    const _project: ProjectModel = projects.find((project) => project.id === Number(id))

    if (!_project) {
      return res.status(404).json({ mensage: 'Project not Found' })
    }

    _project.title = title

    projects.filter((project) => project.id !== _project.id).push(_project)

    return res.json(_project)
  }

  destroy (req: Request, res: Response): Response {
    const { id } = req.params

    const _projectIndex: number = projects.findIndex((project) => project.id === Number(id))

    console.log(_projectIndex)

    if (_projectIndex < 0) {
      return res.status(404).json({ mensage: 'Project not Found' })
    }

    projects.splice(_projectIndex)

    return res.json({ mensage: 'Project successfully deleted' })
  }
}

export default new ProjectController()
