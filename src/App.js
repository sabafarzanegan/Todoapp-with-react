import React, { useEffect, useState } from "react";
import "./App.css";
import Todos from "./components/todos/Todos";
import TodosContext from "./components/Contextdata/ContextData";

function App() {
  const todofromlocalstorage = JSON.parse(localStorage.getItem("todo") || []);
  const [inputvalue, setInputvalue] = useState("");
  const [AllTodos, setAllTodos] = useState(todofromlocalstorage);
  const [status, setStatus] = useState("all");
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(AllTodos));
  }, [AllTodos]);

  const inputhandler = (e) => {
    setInputvalue(e.target.value);
  };
  const addhandler = (e) => {
    e.preventDefault();
    let NewTodo = {
      id: AllTodos.length + 1,
      title: inputvalue,
      completed: false,
    };
    setAllTodos((prevstate) => [...prevstate, NewTodo]);
    setInputvalue("");
  };
  const statusehandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <>
      <TodosContext.Provider
        value={{
          AllTodos,
          setAllTodos,
          inputvalue,
          setInputvalue,
          status,
          setStatus,
        }}
      >
        <h1 className="apptitle">لیست کارها</h1>
        <div className="app-container">
          <form action="" onSubmit={addhandler}>
            <input onChange={inputhandler} type="text" value={inputvalue} />
            <button className="addbtn" type="submit">
              اضافه کردن
            </button>
            <select
              name="todos"
              className="filter-todo"
              onClick={statusehandler}
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </form>
          <Todos />
        </div>
      </TodosContext.Provider>
    </>
  );
}

export default App;
