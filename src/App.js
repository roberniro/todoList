import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [id, setId] = useState(1);

  const addTodo = () => {
    if (inputValue !== "") {
      setTodoList([
        ...todoList,
        { id: id, text: inputValue, completed: false }
      ]);
      setInputValue("");
      setId((prev) => prev + 1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      addTodo();
    }
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const updateTodo = (id, text) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: text };
        }
        return todo;
      })
    );
  };

  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <div className="form">
        <input
          className="new"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="새로운 항목을 입력하세요"
        />
        <button className="add" onClick={addTodo}>
          추가
        </button>
      </div>
      <TodoList
        todoList={todoList}
        toggleTodo={toggleTodo}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
