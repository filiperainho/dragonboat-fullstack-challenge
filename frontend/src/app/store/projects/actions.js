import axios from "axios";

import {
  FETCH_PROJECTS,
  FETCH_PROJECT,
  DELETE_PROJECT,
  CREATE_PROJECT,
  EDIT_PROJECT
} from "./types";

export const fetchProjects = () => {
  return async (dispatch) =>
    dispatch({
      type: FETCH_PROJECTS,
      payload: await axios.get("/projects").then((data) => data.data),
    });
};

export const fetchProject = (id) => {
  return async (dispatch) =>
    dispatch({
      type: FETCH_PROJECT,
      payload: await axios.get(`/projects/${id}`).then((data) => data.data),
    });
};

export const deleteProject = (id) => {
  return async (dispatch) =>
    dispatch({
      type: DELETE_PROJECT,
      payload: await axios.delete(`/projects/${id}`).then((data) => ({ id })),
    });
};

export const createProject = (body) => {
  return async (dispatch) =>
    dispatch({
      type: CREATE_PROJECT,
      payload: await axios.post("/projects", body).then((data) => data.data),
    });
};

export const editProject = (id, body) => {
  return async (dispatch) =>
    dispatch({
      type: EDIT_PROJECT,
      payload: await axios.put(`/projects/${id}`, body).then((data) => data.data),
    });
};
