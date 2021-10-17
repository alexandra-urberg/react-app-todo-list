import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/reducers/taskReducer";
import { changeFilterStatus } from "../store/reducers/filterReducer";

import Timer from "./Timer.js";

const Form = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateErrors = (value) => {
    if (value.length < 2) {
      setErrorMessage("Minimum amount of symbols - 2");
    } else {
      setErrorMessage("");
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    validateErrors(value);
    setInputText(value);
  };

  const addNewTask = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      })
    );
    setInputText("");
  };

  return (
    <form className="form">
      <h2> What do we need to do?</h2>
      <div className="form__container">
        <label className="label">
          <input
            type="text"
            name="inputText"
            placeholder="please, write you task"
            required
            value={inputText}
            onChange={handleInputChange}
            className="task__input"
          />
          <button
            onClick={addNewTask}
            type="submit"
            className={`tasks-button ${errorMessage && "button_disabled"}`}
          >
            <i className="fas fa-plus-square"></i>
          </button>
        </label>
        <div className="select">
          <select
            onChange={(e) => dispatch(changeFilterStatus(e.target.value))}
            className="todos filter-todo"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </div>
      <span className={`${errorMessage && "popup__input-error"}`}>
        {errorMessage}
      </span>
      <Timer />
    </form>
  );
};

export default Form;
