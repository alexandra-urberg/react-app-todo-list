import React from 'react';

const Todo = ({ text, id, todo, setTodo, tod }) => {
    // console.log(text);
    const deleteTodoHandler = () => { // delete task
        setTodo(todo.filter((element) => element.id !== id))
    }

    const compleateHandler = () => { //make the status 'completed'
        setTodo(todo.map((el) => {
            if(el.id ===id) {
                return {
                    ...el, completed: !el.completed
                }
            }
            return el;
        }));
    }

    return(
        <div className="todo">
            <li className={`todo-item ${tod.completed ? "completed" : ""}`}>{text}</li>
            <button 
             onClick={compleateHandler}
             className="complete-btn"
            >
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