import React, { useReducer} from "react";
import Memo from "./Memo"
import "./style.css"
import inputFilter from "./inputFilter";

function reducer (state, action) {
  switch(action.type){
    case 'increment':
    return {count: state.count+1}
    case 'reduce':
    return {count: state.count-1}
    default:
      return state

  }
 
}



function App() {

  const [state, dispatch] = useReducer(reducer, {count:0})

  function decrement (){
    dispatch({type:"increment"})


  }
  function reduce (){
    dispatch({type:"reduce"})


  }



  return (
    <div className="app">
    <button onClick={decrement}>+</button>
    <button onClick={reduce}>-</button>
      <h1>{state.count}</h1>
      <Memo />
      <inputFilter />

    </div>
    
  );
  
}

export default App;
