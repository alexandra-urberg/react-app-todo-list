import React from 'react';
// Import component
import Todo from './Todo.js';

const TodoList = ({todo, setTodo}) => { //parent component
    // console.log(todo);
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todo.map(tod => (
                    <Todo 
                     text={tod.text}
                     id={tod.id}
                     key={tod.id}
                     todo={todo}
                     setTodo={setTodo}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;