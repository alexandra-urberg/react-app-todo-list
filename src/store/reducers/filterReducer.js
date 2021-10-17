const CHANGE_FILTER_STATUS = "CHANGE_FILTER_STATUS";

const defaultState = {
  filter: "",
};

// Reducer

export default function filterReducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_FILTER_STATUS:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

// Action creators

export const changeFilterStatus = (status) => ({
  type: CHANGE_FILTER_STATUS,
  payload: status,
});
