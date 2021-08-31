// This model mocks a real database model for the sake com simplicity
let data = [
  {
    id: 1,
    title: "Project 1",
    author: "John Doe",
    start_date: "2021-01-02",
    end_date: "2021-03-31"
  },
  {
    id: 2,
    title: "Project 2",
    author: "John Doe",
    start_date: "2021-01-02",
    end_date: "2021-03-31"
  },
  {
    id: 3,
    title: "Project 3",
    author: "John Doe",
    start_date: "2021-01-02",
    end_date: "2021-03-31"
  },
  {
    id: 4,
    title: "Project 4",
    author: "John Doe",
    start_date: "2021-01-02",
    end_date: "2021-03-31"
  },
  {
    id: 5,
    title: "Project 5",
    author: "John Doe",
    start_date: "2021-01-02",
    end_date: "2021-03-31"
  },
];
export default class {
  // receives conditions like { title: 'Project 5' } and returns a list of matches
  static findAll = (conditions = {}) => {
    return data
      .filter((obj) =>
        Object.entries(conditions).reduce((curr, [key, condition]) => {
          if (!curr) return false;
          return obj[key] === condition;
        }, true)
      )
      .sort((a, b) => (a.id > b.id ? 1 : -1));
  };

  // receives conditions like { title: 'Project 5' } and returns the first match
  static findOne = (conditions = {}) => {
    return data.find((obj) =>
      Object.entries(conditions).reduce((curr, [key, condition]) => {
        if (!curr) return false;
        return obj[key] === condition;
      }, true)
    );
  };

  // receives an id (int value)
  static removeById = (id) => {
    data = data.filter((project) => project.id !== id);
    return true;
  }

  // receives the new project payload
  static insert = (newProject) => {
    const lastId = data[data.length - 1].id;
    const projectData = { ...newProject, id: lastId + 1 };

    data = [...data, projectData];

    return projectData;
  }

  // receives conditions and the new values to be updated
  static update = (conditions = {}, projectValues) => {
    const affectedProject = data.find((obj) =>
      Object.entries(conditions).reduce((curr, [key, condition]) => {
        if (!curr) return false;
        return obj[key] === condition;
      }, true)
    );
    const projectIndex = data.indexOf(affectedProject);

    if (projectIndex === -1) return null;
    
    data = data.map((project, index) => {
      if (index !== projectIndex) return project;

      return { ...project, ...projectValues };
    });

    return data[projectIndex];
  }
}
