import React, { useState } from "react";

export interface todo {
  id: number;
  task: string;
  complete: boolean;
}

export default function CreateToDo(props: any) {
  // console.log(props);
  const [task, setTask] = useState("");
  const [status, setStatus] = useState(false);
  const handleTodo = (e: any) => {
    setTask(e.target.value);
  };
  const handleTodoStatus = (e: any) => {
    //console.log(e.target.value);
    setStatus(e.target.value);
  };

  const handleTask = () => {
    console.log(task);
    console.log(status);
    props.sendData(task, status);
  };

  return (
    <div>
      <label>
        {" "}
        Tasks:
        <input
          type="text"
          value={task}
          name="Tasks"
          onInput={(event) => handleTodo(event)}
        ></input>
      </label>
      <label>
        {" "}
        Status:
        <input
          type="boolean"
          value={status}
          onInput={(event) => handleTodoStatus(event)}
        ></input>
      </label>

      <button type="button" onClick={handleTask}>
        Save
      </button>
    </div>
  );
}
