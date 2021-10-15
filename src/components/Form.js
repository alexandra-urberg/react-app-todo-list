import React, {useState} from 'react';
import Timer from './Timer.js';

const Form = ({ inputText, setInputText, tasks, setTasks, setStatus }) => {
    const [validationErrors, setValidationErrors] = useState({inputText: ''});

    const inputTextHandler = (e) => { //change state value
        // console.log(e.target.value);
        const { value } = e.target;
        let errors = validationErrors;
        setInputText(e.target.value); 

        value.length < 2 ? errors.inputText = 'Minimum amount of symbols - 2': errors.inputText = '' && setValidationErrors(errors);// проверяем на минимальное колличество символов
    };

    const submitTasksHandler = (e) => { //save new value
        e.preventDefault();
        setTasks([
            ...tasks, { 
                text: inputText, 
                completed: false, 
                id: Math.random()* 1000 //random user id
            }
        ]);
        setInputText(''); //make inputText empty after adding to the list
    }

    const statusHandler = (e) => { // change status
        // console.log(e.target.value);
        setStatus(e.target.value);
    }

    return(
        <form className="form">
            <h2> What do we need to do?</h2>
            <div className="form__container">
                <label className="label">
                    <input
                     type="text"
                     name="inputText"
                     placeholder="please, write you task"
                     required
                     value={inputText || ""}
                     onChange={inputTextHandler} 
                     className="task__input"
                    />
                <button 
                 onClick={submitTasksHandler} 
                 type="submit"
                 className={`tasks-button ${validationErrors.inputText || inputText === '' ? "button_disabled" : null}`} 
                >
                    <i className="fas fa-plus-square"></i>
                </button>
                </label>
                <div className="select">
                    <select 
                     onChange={statusHandler}
                     className="todos filter-todo"
                    >
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </div>
            <span className={`${validationErrors.inputText ? "popup__input-error" : null}`}>{validationErrors.inputText}</span>
            <Timer />
        </form>
    );
};

export default Form;