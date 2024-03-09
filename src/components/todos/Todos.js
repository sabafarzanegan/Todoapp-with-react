import React from 'react'
import "./Todos.css"
import { IoTrashBinOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

function Todos() {
  return (
    <>
      <div className="todos-container">
        <ul>
          <li className=''><span><FaCheck className='todoicon' /> <IoTrashBinOutline className='todoicon' /></span>ورزش کردن</li>
          <li>ورزش کردن</li>
          <li>ورزش کردن</li>
        </ul>
      </div>
    </>
  );
}

export default Todos