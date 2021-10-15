import React from 'react';

const Form = ({ inputText, setInputText, tasks, setTasks, setStatus }) => {

    const inputTextHandler = (e) => { //change state value
        // console.log(e.target.value);
        setInputText(e.target.value); 
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
            <input 
             value={inputText} 
             onChange={inputTextHandler} 
             type="text" 
             className="tasks-input" 
            />
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