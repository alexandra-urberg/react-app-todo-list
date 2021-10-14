import React from 'react';
// Import component
import Todo from './Todo.js';

const TodoList = ({todo}) => { //parent component
    // console.log(todo);
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todo.map(tod => (
                    <Todo text={tod.text} key={tod.id}/>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;