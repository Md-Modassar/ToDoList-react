import React from "react";

const ToDolist=(props)=>{
  

    return(<>
      <div className="todo_style">
        <button className="fa fa-times" onClick={()=>{
            props.onSelect(props.id)
            }}>+</button>
        <li>{props.text}</li>
      </div>
      
    </>
    )
}

export default ToDolist;