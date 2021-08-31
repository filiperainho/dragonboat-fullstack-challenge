import ProjectsService from "./projects.service";

export default class {
  getOne = (id) => {
    const service = new ProjectsService();

    return service.getOne(id);
  };

  get = () => {
    const service = new ProjectsService();

    return service.getAll();
  };

  removeById = (id) => {
    const service = new ProjectsService();

    return service.removeById(id);
  }

  insert = (projectBody) => {
    const service = new ProjectsService();

    return service.insert(projectBody);
  }

  update = (id, projectBody) => {
    const service = new ProjectsService();

    return service.update(id, projectBody);
  }
}
