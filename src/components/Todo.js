import React from 'react';

const Todo = ({ text, id, tasks, setTasks, task }) => {
    // console.log(text)

    const deleteTasksHandler = () => { // delete task
        setTasks(tasks.filter((element) => element.id !== id))
    }

    const compleateHandler = () => { //make the status 'completed'
        setTasks(tasks.map((el) => {
            if(el.id === id) {
                return {
                    ...el, completed: !el.completed
                }
            }
            return el;
        }));
    }

    return(
        <li className="todo">
            <p className={`todo-item ${task.completed ? "completed" : ""}`}>{text}</p>
            <div>
                <button 
                 onClick={compleateHandler}
                 className="complete-btn"
                >
                    <i className="fas fa-check"></i>
                </button>
                <button 
                 onClick={deleteTasksHandler}
                 className="trash-btn"
                >
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </li>
    );
}

export default Todo;