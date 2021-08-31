import {
  FETCH_PROJECTS,
  FETCH_PROJECT,
  DELETE_PROJECT,
  CREATE_PROJECT,
  EDIT_PROJECT
} from "./types";

const initialState = {
  byId: {},
  ids: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS: {
      const data = action.payload || [];
      return {
        ...state,
        byId: data.reduce((byId, p) => ({ ...byId, [p.id]: p }), state.byId),
        ids: data.map((p) => p.id),
      };
    }
    case FETCH_PROJECT: {
      const data = action.payload;

      if (!data) return state;

      return {
        ...state,
        byId: {
          ...state.byId,
          [data.id]: data,
        },
      };
    }
    case DELETE_PROJECT: {
      const data = action.payload;
      return {
        ...state,
        byId: Object.keys(state.byId)
          .filter((byId) => byId !== data.id)
          .reduce((byId, p) => ({ ...byId, [p.id]: p }), state.byId),
        ids: state.ids.filter((id) => id !== data.id),
      };
    }
    case CREATE_PROJECT: {
      const data = action.payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          [data.id]: data,
        },
        ids: [...state.ids, data.id],
      };
    }

    case EDIT_PROJECT: {
      const data = action.payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          [data.id]: data,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
