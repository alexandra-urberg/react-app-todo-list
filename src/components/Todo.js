import React from 'react';

const Todo = ({ text, id, todo, setTodo }) => {
    // console.log(text);
    const deleteTodoHandler = () => { // delete task
        setTodo(todo.filter((element) => element.id !== id))
    }

    return(
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button 
             onClick={deleteTodoHandler}
             className="trash-btn"
            >
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;