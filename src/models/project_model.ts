
class ProjectModel {
  id: number;
  title: string;
  tasks: Array<string>;
  constructor (id: number, title: string, tasks: Array<string>) {
    this.id = id
    this.title = title
    this.tasks = tasks
  }
}

export default ProjectModel
