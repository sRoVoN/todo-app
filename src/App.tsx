import { useEffect, useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [checkedTodos, setCheckedTodos] = useState<Todo[]>([]);
  useEffect(() => {
    const data = localStorage.getItem("todos");
    if (data !== null) setTodos(JSON.parse(data));
    console.log(data, "data");
  }, []);
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("add");
    console.log(todo, "todo");
    if (todo)
      setTodos((prevTdos) => [
        ...prevTdos,
        { id: Date.now(), todo: todo, isDone: false },
      ]);
    setTodo("");
  };
  const handleDelete = (id: number) => {

    if (todos) {
      const remainList = todos.filter((todo) => todo.id !== id);
      console.log(remainList);
      setTodos(remainList);
    }
  };
  const handleCheck = (id: number) => {
   setTodos((prevTodos) => prevTodos.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone}: todo));
  };
  useEffect(() => {
    const updatedCheckedTodos = todos.filter((todo) => todo.isDone);
    setCheckedTodos(updatedCheckedTodos);

  }, [todos]);
  return (
    <>
      <div className="flex flex-col">
        <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        {todos.length > 0 && (
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
            chechedTodos={checkedTodos}
          />
        )}
      </div>
    </>
  );
}

export default App;
