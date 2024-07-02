import React, { useState } from "react";
import { todo } from "./ListToDo";

interface todoItemprops {
  todo: todo;
}

export default function TodoItem(props: todoItemprops) {
  //const[id,setId] = useState();
  const { todo } = props;

  return (
    <>
      <label className={todo?.complete ? "complete" : ""}>
        {todo?.id} - {todo?.task} status -{" "}
        {todo?.complete ? "Completed" : "pending"}
      </label>
      <br />
    </>
  );
}
