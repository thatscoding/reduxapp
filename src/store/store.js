import { createStore } from "redux";

const CounterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return (state = state + 1);

    case "DEC":
      return (state = state - 1);

    default:
      return state;
  }
};

export const store = createStore(CounterReducer);
