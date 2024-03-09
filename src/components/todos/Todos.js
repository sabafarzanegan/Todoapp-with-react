import React, { useContext } from "react";
import "./Todos.css";
import { IoTrashBinOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import TodosContext from "../Contextdata/ContextData";

function Todos() {
  const contextData = useContext(TodosContext);
  console.log(contextData);
  return (
    <>
      <div className="todos-container">
        <ul>
          {contextData.AllTodos.map((todo) => (
            <li className="">
              <span>
                <FaCheck className="todoicon" />{" "}
                <IoTrashBinOutline   className="todoicon" />
              </span>
              <span>
                <p>{todo.title}</p>
                <p>-{todo.id}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todos;
