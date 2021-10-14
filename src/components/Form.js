import React from 'react';

const Form = ({ inputText, setInputText, todo, setTodo, setStatus }) => {

    const inputTextHandler = (e) => { //change state value
        // console.log(e.target.value);
        setInputText(e.target.value); 
    };

    const submitTodoHandler = (e) => { //save new value
        e.preventDefault();
        setTodo([
            ...todo, { 
                text: inputText, 
                completed: false, 
                id: Math.random()* 1000 //random user id
            }
        ]);
        setInputText(''); //make inputText empty after adding to the list
    }

    const statusHandler = (e) => {
        // console.log(e.target.value);
        setStatus(e.target.value);
    }

    return(
        <form>
            <input 
             value={inputText} 
             onChange={inputTextHandler} 
             type="text" 
             className="todo-input" 
            />
            <button 
             onClick={submitTodoHandler} 
             className="todo-button" 
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