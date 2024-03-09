import React, { useState } from "react";
import "./App.css"
import Todos from "./components/todos/Todos";

function App() {
  const [inputvalue, setInputvalue] = useState("");
  const inputhandler = (e) => {
    setInputvalue(e.target.value);
  };
  const addhandler = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <h1 className="apptitle">لیست کارها</h1>
      <div className="app-container">
        <form action="" onSubmit={addhandler}>
          <input onChange={inputhandler} type="text" value={inputvalue} />
          <button className="addbtn" type="submit">اضافه کردن</button>
        </form>
        <Todos />
      </div>
    </>
  );
}

export default App;
