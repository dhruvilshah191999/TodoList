import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { TodoObject, defaultState } from "./store";
import { EditTodo, addTodo, deleteTodo } from "./store/actions/todoActions";

function App() {
  const [todo, setTodo] = React.useState("");
  const [editTodo, setEditTodo] = React.useState<TodoObject | null>(null);
  const todos = useSelector((state: defaultState) => state.todos);
  const dispatch = useDispatch();

  const onEditClick = (todo: TodoObject) => {
    if (editTodo?.id === todo.id) {
      dispatch(EditTodo(todo.id, editTodo?.todo));
      setEditTodo(null);
    } else {
      setEditTodo(todo);
    }
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTodo(e?.target?.value)
          }
        />
        <button
          style={{ marginLeft: "20px" }}
          onClick={() => {
            if (todo !== "") dispatch(addTodo(todo));
            setTodo("");
          }}
        >
          Submit
        </button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "30px",
        }}
      >
        {todos?.length > 0 &&
          todos.map((todoObject: TodoObject) => (
            <div style={{ display: "flex", marginBottom: "20px" }}>
              {editTodo?.id === todoObject.id ? (
                <input
                  type="text"
                  value={editTodo.todo}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEditTodo({ ...editTodo, todo: e?.target?.value })
                  }
                />
              ) : (
                <p>{todoObject.todo}</p>
              )}
              <button
                style={{ marginLeft: "20px" }}
                onClick={() => onEditClick(todoObject)}
              >
                {editTodo?.id === todoObject.id ? "Save" : "Edit"}
              </button>
              <button
                style={{ marginLeft: "20px" }}
                onClick={() => {
                  editTodo?.id === todoObject.id && setEditTodo(null);
                  dispatch(deleteTodo(todoObject.id));
                }}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
