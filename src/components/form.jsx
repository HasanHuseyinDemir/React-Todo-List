import React, { useState } from "react";

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
  const [alertWarning, setAlertWarning] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);

  const submitTodoHandler = (e) => {
    e.preventDefault();
    const isEmpty = (str) => !str.trim().length;
    if (isEmpty(inputText)) {
      setAlertWarning(true);
    }
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() }
    ]);
    setInputText("");
  };
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        type="text"
        className="todo-input"
        placeholder="Ekle"
        onChange={inputTextHandler}
      />
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-circle">Ekle</i>
      </button>

      <div className="select" onChange={statusHandler}>
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
