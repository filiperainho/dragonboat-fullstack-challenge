import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";

import BaseButton from "../../components/BaseButton";
import BaseContainer from "../../components/BaseContainer";
import BaseInput from "../../components/BaseInput";

const initialState = {
  title: '',
  author: '',
  start_date: '',
  end_date: '',
};

const Component = (props) => {
  const {
    selectedProject,
    onSubmit,
    onReset
  } = props;

  const [project, setProject] = useState(initialState);

  const onFormSubmit = useCallback((ev) => {
    ev.preventDefault();

    if (!project.title || !project.author || !project.start_date || !project.end_date) {
      return;
    };
    
    onSubmit(project);
    setProject(initialState);
  }, [onSubmit, project]);

  const onFormReset = useCallback(() => {
    setProject(initialState);
    onReset();
  }, [onReset]);

  const onFormValuesChange = useCallback((newValue) => {
    setProject((preValue) => ({ ...preValue, [newValue.name]: newValue.value }));
  }, []);

  useEffect(() => {
    setProject(selectedProject || {});
  }, [selectedProject]);

  return (
    <StyledBaseContainer>
      <Title variant="h5">
        { selectedProject ? `Edit - ${selectedProject.title}` : 'New project' }
      </Title>
      <form noValidate autoComplete="off" onSubmit={onFormSubmit}>
        <FormContent>
          <BaseInput
            id="project-title"
            name="title"
            label="Title"
            value={project.title}
            onChange={onFormValuesChange}
            required
            InputLabelProps={{
              shrink: true,
            }}/>
          <BaseInput
            id="project-author"
            name="author"
            label="Author"
            value={project.author}
            onChange={onFormValuesChange}
            required
            InputLabelProps={{
              shrink: true,
            }}/>
          <BaseInput
            type="date"
            id="project-start-date"
            name="start_date"
            label="Start date"
            value={project.start_date}
            onChange={onFormValuesChange}
            required
            InputLabelProps={{
              shrink: true,
            }}/>
          <BaseInput
            type="date"
            id="project-end-date"
            name="end_date"
            label="End date"
            value={project.end_date}
            onChange={onFormValuesChange}
            required
            InputLabelProps={{
              shrink: true,
            }}/>
        </FormContent>

        <ActionsContainer>
          <BaseButton
            color="primary"
            variant="contained"
            type="submit"
            onClick={onFormSubmit} >
            Save
          </BaseButton>
          {onReset &&
            <BaseButton
              color="primary"
              type="submit"
              onClick={onFormReset} >
              Reset
            </BaseButton>
          }
        </ActionsContainer>
      </form>
    </StyledBaseContainer>
  );
};

Component.propTypes = {
  selectedProject: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func,
};

Component.defaultProps = {
  selectedProject: null,
};

const StyledBaseContainer = styled(BaseContainer)`
  margin-top: 64px;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid;
`;

const Title = styled(Typography)`
  padding: 0 0 32px;
`;

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
`;

const FormContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export default Component;
