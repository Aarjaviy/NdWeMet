import React from "react";
import {IoMdArrowDropdown} from "react-icons/io";

const dropdown = () => {
  return (
    <div className="polls-my">
      <div>Polls raised by other men</div>
      <div>
        <button className="polls-my-b">
          <div><IoMdArrowDropdown/></div>
          <div>Filters</div>
        </button>
      </div>
    </div>
  )
}

export default dropdown
