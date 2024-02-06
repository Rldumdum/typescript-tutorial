export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

// export type Actions =
//   | { type: "add"; payload: string }
//   | { type: "remove"; payload: number }
//   | { type: "done"; payload: number }
//   | { type: "edit"; payload: { id: number; todo: string } };

// export const TodoReducer = (state: Todo[], action: Actions) => {
//   const { type } = action;
//   switch (type) {
//     case "add":
//       return [
//         ...state,
//         { id: Date.now(), todo: action.payload, isDone: false },
//       ];
//     case "remove":
//       return state.filter((todo) => todo.id !== action.payload);
//     case "done":
//       return state.map((todo) =>
//         todo.id !== action.payload ? { ...todo, isDone: !todo.isDone } : todo
//       );
//     default:
//       return state;
//   }
// };
