import { createStore } from "redux";

const initialState = {
  isLightOn: true,
  steps: 0,
};

export function toggleLight() {
  return {
    type: "TOGGLE_LIGHT",
  };
}

export function addSteps() {
  return {
    type: "ADD_STEPS",
  };
}

export function resetSteps() {
  return {
    type: "RESET_STEPS",
  };
}

function reducer(state = {}, action) {
  switch (action.type) {
    case "TOGGLE_LIGHT":
      return {
        ...state,
        isLightOn: !state.isLightOn,
      };
    case "ADD_STEPS":
      return {
        ...state,
        steps: state.steps + 1,
      };
    case "RESET_STEPS":
      return {
        ...state,
        steps: 0,
      };
    default:
      return state;
  }
}

export const store = createStore(reducer, initialState);
