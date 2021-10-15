import React from 'react';
// Import component
import Todo from './Todo.js';

const TodoList = ({tasks, setTasks, filter }) => { //parent component
    // console.log(todo);
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filter.map(task => (
                    <Todo 
                     text={task.text}
                     id={task.id}
                     key={task.id}
                     tasks={tasks}
                     setTasks={setTasks}
                     task={task}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;