import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers/todoReducers";

export interface TodoObject {
  id: string;
  todo: string;
}

export interface defaultState {
  todos: Array<TodoObject>;
}

const initialState: defaultState = {
  todos: [],
};

const store = createStore(rootReducer, initialState);

export default store;
