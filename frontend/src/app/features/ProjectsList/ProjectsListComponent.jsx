import React, { useCallback, useState } from "react";
import styled from "styled-components";

import Typography from "@material-ui/core/Typography";

import BaseList from "../../components/BaseList";
import ProjectTile from "../../components/ProjectTile";

import CreateAndEditProjectComponent from "../CreateAndEditProject";

const Component = (props) => {
  const {
    projects,
    onDeleteProject,
    onCreateProject,
    onEditProject,
  } = props;

  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const onFormSubmit = useCallback((project) => {
    if (selectedProjectId) {
      onEditProject(selectedProjectId, project);
    } else {
      onCreateProject(project);
    }

    setSelectedProjectId(null);
  }, [onCreateProject, onEditProject, selectedProjectId]);

  const onFormReset = useCallback((project) => {
    setSelectedProjectId(null);
  }, []);

  return (
    <>
      <Title variant="h4">Projects List</Title>
      <BaseList>
        {projects.map((project, index) => (
          <ProjectTile
            key={index}
            project={project}
            withDivider={true}
            onEdit={setSelectedProjectId}
            onDelete={onDeleteProject} />
        ))}
      </BaseList>

      <CreateAndEditProjectComponent
        projectId={selectedProjectId}
        onSubmit={onFormSubmit}
        onReset={onFormReset} />
    </>
  );
};

const Title = styled(Typography)`
  padding: 20px 0 20px 13px;
`;

export default Component;
