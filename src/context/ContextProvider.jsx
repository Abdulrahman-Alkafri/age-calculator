import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const TheContext = createContext();
const initState = {
  date: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "dateInput":
      return { ...state, date: action.payload };
    default:
      return Error("An Error Occured");
  }
}
function ContextProvider({ children }) {
  const [{ date }, dispatch] = useReducer(reducer, initState);
  return (
    <TheContext.Provider
      value={{
        date,
        dispatch,
      }}
    >
      {children}
    </TheContext.Provider>
  );
}
function useAppContext() {
  const Context = useContext(TheContext);
  return Context;
}
export { ContextProvider, useAppContext };
