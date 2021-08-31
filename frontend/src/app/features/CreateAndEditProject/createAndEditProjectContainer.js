import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { fetchProject as fetchProjectAction } from "../../store/projects/actions";
import { selectProject } from "../../store/projects/selectors";

const container = (Component) => {
  return (props) => {
    const { projectId } = props;

    const dispatch = useDispatch();
    
    const fetchProject = () => dispatch(fetchProjectAction(projectId));

    const project = useSelector((state) => selectProject(state, projectId));

    useEffect(() => {
      if (projectId) {
        fetchProject();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [projectId]);

    return <Component {...props} selectedProject={project} />;
  };
};

export default container;
