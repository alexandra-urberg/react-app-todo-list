import React, {useState} from 'react';

const Form = ({ inputText, setInputText, tasks, setTasks, setStatus }) => {
    const [validationErrors, setValidationErrors] = useState({inputText: ''});

    const inputTextHandler = (e) => { //change state value
        // console.log(e.target.value);
        const { value } = e.target;
        let errors = validationErrors;
        setInputText(e.target.value); 

        value.length < 2 ? errors.inputText = 'Минимальное колличество символоа - 2': errors.inputText = '' && setValidationErrors(errors);// проверяем на минимальное колличество символов
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
        <form>
            <label className="popup__label">
                <input
                 type="text"
                 name="inputText"
                 placeholder="please, write you task"
                 required
                 value={inputText || ""}
                 onChange={inputTextHandler} 
                 className="tasks-input" 
                />
                <span className={`${validationErrors.inputText ? "popup__input-error" : null}`}>{validationErrors.inputText}</span>
            </label>
            <button 
             onClick={submitTasksHandler} 
             className="tasks-button" 
             type="submit"
            >
                <i className="fas fa-plus-square"></i>
            </button>
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
        </form>
    );
};

export default Form;