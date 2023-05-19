import TodoActions from "../const";
import uuid from "react-uuid";

export const addTodo = (todo: string) => {
  return { type: TodoActions.ADD_TODO, todo: { id: uuid(), todo } };
};

export const deleteTodo = (todoId: string) => {
  return { type: TodoActions.DELETE_TODO, id: todoId };
};

export const EditTodo = (todoId: string, todo: string) => {
  return { type: TodoActions.EDIT_TODO, todo: { id: todoId, todo } };
};
