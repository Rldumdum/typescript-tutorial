import React from "react";
import "./styles.css";
import { Actions, Todo } from "../model";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  // todos: Todo[];
  // setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  state: Todo[];
  dispatch: React.Dispatch<Actions>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<never[]>>;
}

const TodoList: React.FC<Props> = ({
  state,
  dispatch,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided) => (
          <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active Tasks</span>
            {state.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                key={todo.id}
                state={state}
                dispatch={dispatch}
                completedTodos={completedTodos}
                setCompletedTodos={setCompletedTodos}
              />
            ))}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided) => (
          <div
            className="todos remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Completed Tasks</span>
            {completedTodos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                key={todo.id}
                state={state}
                dispatch={dispatch}
                completedTodos={completedTodos}
                setCompletedTodos={setCompletedTodos}
              />
            ))}
          </div>
        )}
      </Droppable>
    </div>

    // <div className="todos">
    //   {state.map((todo) => (
    //     <SingleTodo
    //       todo={todo}
    //       key={todo.id}
    //       state={state}
    //       dispatch={dispatch}
    //     />
    //   ))}
    // </div>
  );
};

export default TodoList;
