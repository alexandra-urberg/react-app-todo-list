import React from 'react';
// Import component
import Todo from './Todo.js';

const TodoList = ({todo, setTodo, filter }) => { //parent component
    // console.log(todo);
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filter.map(tod => (
                    <Todo 
                     text={tod.text}
                     id={tod.id}
                     key={tod.id}
                     todo={todo}
                     setTodo={setTodo}
                     tod={tod}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;