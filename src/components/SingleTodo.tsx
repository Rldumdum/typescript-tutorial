import React, { useEffect, useRef, useState } from "react";
import { Todo, Actions } from "../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Draggable } from "react-beautiful-dnd";
type Props = {
  // todos: Todo[];
  // setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todo: Todo;
  dispatch: React.Dispatch<Actions>;
  state: Todo[];
  index: number;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<never[]>>;
};

const SingleTodo = ({
  todo,
  dispatch,
  state,
  index,
  setCompletedTodos,
  completedTodos,
}: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const handleDone = (id: number) => {
    dispatch({ type: "done", payload: id });
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    //   )
    // );
  };

  const handleDelete = (id: number) => {
    // setTodos(todos.filter((todo) => todo.id !== id));
    dispatch({ type: "remove", payload: id });
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    // setTodos(
    //   state.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    // );
    dispatch({ type: "edit", payload: { id, todo: editTodo } });
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <form
          className="todos__single"
          onSubmit={(e) => handleEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {edit ? (
            <input
              ref={inputRef}
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="todos__single--text"
            />
          ) : todo.isDone ? (
            <s className="todos__single--text">{todo.todo}</s>
          ) : (
            <span className="todos__single--text">{todo.todo}</span>
          )}
          <div>
            <span
              className="icon"
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}
            >
              <AiFillEdit />
            </span>
            <span className="icon" onClick={() => handleDelete(todo.id)}>
              <AiFillDelete />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
              <MdDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;
