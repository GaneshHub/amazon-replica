import React, {useContext, useReducer, createContext} from "react";

//prepares the data layer
export const StateContext = createContext();

//warap our app and provides the data layer
export const StateProvider = ({reducer, initialState, children}) =>(
<StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider>
);

//pull info from data layer
export const useStateValue = () => useContext(StateContext);



