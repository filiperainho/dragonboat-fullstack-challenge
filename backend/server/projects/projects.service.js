import Projects from "db/projects";
import Service from "../utils/Service";

import ObjectDoesNotExistError from "../utils/exceptions/ObjectDoesNotExistError";

export default class extends Service {
  getOne = (id) => {
    const project = Projects.findOne({ id });
    if (!project) throw new ObjectDoesNotExistError();

    return project;
  };

  getAll = () => {
    return Projects.findAll();
  };

  removeById = (id) => {
    Projects.removeById(id);
  }

  insert = (projectBody) => {
    const project = Projects.insert(projectBody);

    return project;
  }

  update = (id, projectBody) => {
    const project = Projects.update({ id }, projectBody);

    if (!project) throw new ObjectDoesNotExistError();

    return project;
  }
}
