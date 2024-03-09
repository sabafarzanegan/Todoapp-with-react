import React, { useContext } from "react";
import "./Todos.css";
import { IoTrashBinOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import TodosContext from "../Contextdata/ContextData";

function Todos() {
  const contextData = useContext(TodosContext);
  const delethandler = (ID) => {
    let deletedtodo = contextData.AllTodos.filter((todo) => todo.id !== ID);
    contextData.setAllTodos(deletedtodo);
  };
  const checkhandler = (ID) => {
    let newTodos = [...contextData.AllTodos];

    newTodos.forEach((todo) => {
      if (todo.id === ID) {
        todo.completed = !todo.completed;
      }
    });

    contextData.setAllTodos(newTodos);
  };

  return (
    <>
      <div className="todos-container">
        <ul>
          {contextData.status === "all" &&
            contextData.AllTodos.map((todo) => (
              <li className={todo.completed ? "completed" : ""}>
                <span>
                  <FaCheck
                    onClick={() => checkhandler(todo.id)}
                    className="todoicon"
                  />{" "}
                  <IoTrashBinOutline
                    onClick={() => delethandler(todo.id)}
                    className="todoicon"
                  />
                </span>
                <span>
                  <p>{todo.title}</p>
                  <p>-{todo.id}</p>
                </span>
              </li>
            ))}
          {contextData.status === "completed" &&
            contextData.AllTodos.filter((todo) => todo.completed).map(
              (todo) => (
                <li className={todo.completed ? "completed" : ""}>
                  <span>
                    <FaCheck
                      onClick={() => checkhandler(todo.id)}
                      className="todoicon"
                    />{" "}
                    <IoTrashBinOutline
                      onClick={() => delethandler(todo.id)}
                      className="todoicon"
                    />
                  </span>
                  <span>
                    <p>{todo.title}</p>
                    <p>-{todo.id}</p>
                  </span>
                </li>
              )
            )}
          {contextData.status === "uncompleted" &&
            contextData.AllTodos.filter((todo) => !todo.completed).map(
              (todo) => (
                <li className={todo.completed ? "completed" : ""}>
                  <span>
                    <FaCheck
                      onClick={() => checkhandler(todo.id)}
                      className="todoicon"
                    />{" "}
                    <IoTrashBinOutline
                      onClick={() => delethandler(todo.id)}
                      className="todoicon"
                    />
                  </span>
                  <span>
                    <p>{todo.title}</p>
                    <p>-{todo.id}</p>
                  </span>
                </li>
              )
            )}
        </ul>
      </div>
    </>
  );
}

export default Todos;
