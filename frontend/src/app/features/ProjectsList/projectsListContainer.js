import React, { useCallback, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  fetchProjects as fetchProjectsAction,
  deleteProject as deleteProjectAction,
  createProject as createProjectAction,
  editProject as editProjectAction,
} from "../../store/projects/actions";
import { selectProjects } from "../../store/projects/selectors";

const container = (Component) => {
  return (props) => {
    const dispatch = useDispatch();

    const fetchProjects = () => dispatch(fetchProjectsAction());

    const deleteProjectHandler = useCallback((id) => dispatch(deleteProjectAction(id)), [dispatch]);

    const createProjectHandler = useCallback((project) => dispatch(createProjectAction(project)), [dispatch]);

    const editProjectHandler = useCallback((id, project) => dispatch(editProjectAction(id, project)), [dispatch]);

    const projects = useSelector((state) => selectProjects(state));

    useEffect(() => {
      fetchProjects();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Component
      {...props}
      projects={projects}
      onDeleteProject={deleteProjectHandler}
      onCreateProject={createProjectHandler}
      onEditProject={editProjectHandler} />;
  };
};

export default container;
