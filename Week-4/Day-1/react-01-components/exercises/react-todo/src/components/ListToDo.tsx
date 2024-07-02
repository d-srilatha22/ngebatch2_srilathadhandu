import React from "react";
import TodoItem from "./TodoItem";

export interface todo {
  id: number;
  task: string;
  complete: boolean;
}

// interface listTodoProps {
//   todos: todo[];
// }

export default function ListToDo(props: any) {
  const handleCheckbox = (id: Number) => {
    props.handleSelection(id);
  };
  const handleDeletion = (id: any) => {
    props.handleDelete(id);
  };
  return (
    <div>
      {props.todos.map((todo: any) => (
        <>
          <input
            type="checkbox"
            value={todo?.id}
            checked={todo?.complete ? true : false}
            onInput={() => handleCheckbox(todo.id)}
          />
          <button type="button" onClick={() => handleDeletion(todo.id)}>
            Delete
          </button>
          <TodoItem todo={todo} />
        </>
      ))}
    </div>
  );
}
