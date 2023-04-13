import React from "react";
import "./TodoList.css";

const TodoList = ({ todoList, toggleTodo, updateTodo, deleteTodo }) => {
  return (
    <ul className="todos">
      {todoList.map((todo) => (
        <li className="list" key={todo.id}>
          <input
            type="text"
            value={todo.text}
            onChange={(e) => updateTodo(todo.id, e.target.value)}
            className={todo.completed ? "item completed" : "item"}
          />
          <button
            className={todo.completed ? "toggle_on" : "toggle_off"}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.completed ? "완료" : "진행"}
          </button>
          <button className="delete" onClick={() => deleteTodo(todo.id)}>
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
