import { useState } from "react";
import "./App.css";
import ListToDo from "./components/ListToDo";
import CreateToDo from "./components/CreateToDo";

const App = () => {
  // eslint-disable-next-line
  const todos = [
    {
      id: 1,
      task: "Walk the Dog",
      complete: false,
    },
    {
      id: 2,
      task: "Feed the Cat",
      complete: true,
    },
    {
      id: 3,
      task: "read a book",
      complete: false,
    },
  ];

  const [tasks, setTasks] = useState(todos);
  const setTodo = (task: any, status: any) => {
    console.log(status);
    var obj = {
      id: tasks.length + 1,
      task: task,
      complete: status,
    };
    //console.log(obj);
    setTasks((tasks) => [...tasks, obj]);
  };

  const handleSelection = (id: any) => {
    console.log(id);
    // var num = Number(id);
    var arr: any = [...tasks];
    arr.map((item: any) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
    });
    setTasks(arr);
  };

  const handleDelete = (id: any) => {
    console.log(id);
    // var arrNew: any = [...tasks];
    var arrNew: any = tasks.filter((item: any) => item.id !== id);
    console.log(arrNew);
    setTasks(arrNew);
  };

  return (
    <div className="body">
      <h1>Todo</h1>
      <ListToDo
        todos={tasks}
        handleSelection={handleSelection}
        handleDelete={handleDelete}
      />
      <CreateToDo sendData={setTodo} />
    </div>
  );
};

export default App;
