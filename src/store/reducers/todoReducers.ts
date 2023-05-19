import { TodoObject, defaultState } from "..";
import TodoActions from "../const";

const rootReducer: any = (state: defaultState, payload: any) => {
  switch (payload.type) {
    case TodoActions.ADD_TODO:
      return { ...state, todos: [...state.todos, payload.todo] };
    case TodoActions.DELETE_TODO:
      const newTodoList = state.todos.filter(
        (todo: TodoObject) => todo.id !== payload.id
      );
      return { ...state, todos: newTodoList };
    case TodoActions.EDIT_TODO:
      const todoList = state.todos.map((todo: TodoObject) =>
        todo.id === payload.todo.id ? payload.todo : todo
      );
      return { ...state, todos: todoList };
    default:
      return state;
  }
};

export default rootReducer;
