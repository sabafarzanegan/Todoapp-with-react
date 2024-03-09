import React, { useState } from "react";
import "./App.css";
import Todos from "./components/todos/Todos";
import TodosContext from "./components/Contextdata/ContextData";

function App() {
  const [inputvalue, setInputvalue] = useState("");
  const [AllTodos, setAllTodos] = useState([]);
  const inputhandler = (e) => {
    setInputvalue(e.target.value);
  };
  const addhandler = (e) => {
    e.preventDefault();
    let NewTodo = {
      id: AllTodos.length + 1,
      title: inputvalue,
    };
    setAllTodos((prevstate) => [...prevstate, NewTodo]);
    setInputvalue("");
  };
  return (
    <>
      <TodosContext.Provider
        value={{
          AllTodos,
          setAllTodos,
          inputvalue,
          setInputvalue,
        }}
      >
        <h1 className="apptitle">لیست کارها</h1>
        <div className="app-container">
          <form action="" onSubmit={addhandler}>
            <input onChange={inputhandler} type="text" value={inputvalue} />
            <button className="addbtn" type="submit">
              اضافه کردن
            </button>
          </form>
          <Todos />
        </div>
      </TodosContext.Provider>
    </>
  );
}

export default App;
