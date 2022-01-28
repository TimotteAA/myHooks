import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  counter: 0,
};

// action types
const INCREMENT_NUM = "INCREMENT_NUM";
const DECREMENT_NUM = "DECREMENT_NUM";

// actionCreator
function incrementCounterAction(num) {
  return {
    type: INCREMENT_NUM,
    payload: num,
  };
}

function decrementCounterAction(num) {
  return {
    type: DECREMENT_NUM,
    payload: num,
  };
}

// reducer.js
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_NUM: {
      return { ...state, counter: state.counter + action.payload };
    }
    case DECREMENT_NUM: {
      return { ...state, counter: state.counter - action };
    }
    default:
      return state;
  }
}

const AppContext = createContext();

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
