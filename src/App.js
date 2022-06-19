import React, {useReducer} from "react";
import "./style.css";

//useReducer is same like useState but for managing multiple state or managing big project we prefer useReducer
//in useReducer we pass two arguments 1 is reducer(function) and 2 one is intialState --> this reducer is pure function(if we give any input the output of that function will be same is known as pure function) and it does not produce any side effects 
// reducer function always return something

const initialState = 0; // In initialState we can also pass objects

// for defining our reducer function
const reducer = (state, action) => {
  // console.log(state, action)
  if(action.type === "Incre") {
    return state + 1;
  }
  if(action.type === "Decre") {
    return state - 1;
  }
  return state;
}
// this reducer function which takes two parameters: 1 is current state and 2 is action method(function)
// reducer function always return something

export default function App() {

  // like we have useState similarly we have useReducer and it takes also takes two arguments reducer function and intialState
  const [state, dispatch] = useReducer(reducer, initialState) // it also return two things like in useState
  // this dispatch will trigger the action methods
  // basically this reducer is a pure function which accepts a state and an action and return a new state

  return (
    <div>
      <button onClick={() => dispatch({type: "Decre"})}>-</button>
      {state}
      <button onClick={() => dispatch({type: "Incre"})}>+</button>
    </div>
  );
}
