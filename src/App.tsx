import React, { useReducer, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { TodoReducer } from "./model";
import TodoList from "./components/TodoList";
import { DragDropContext } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [state, dispatch] = useReducer(TodoReducer, []);
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo !== null && todo !== "") {
      dispatch({ type: "add", payload: todo });
      setTodo("");
    }
  };

  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          state={state}
          dispatch={dispatch}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
