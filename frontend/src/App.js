import React from "react";

import styled from "styled-components";
import { withTheme } from "@material-ui/core/styles";

import BaseAppBar from "./app/components/BaseAppBar";

import ProjectsList from "./app/features/ProjectsList";

const App = (props) => {
  return (
    <Wrapper>
      <BaseAppBar />
      <Content>
        <ProjectsList />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  &&&& {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin: 0;
    padding: 0;
  }
`;

const Content = withTheme(styled.div`
  min-width: 1024px;
  max-width: 100%;
  padding: 20px;
`);

export default withTheme(App);
