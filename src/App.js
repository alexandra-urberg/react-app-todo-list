import { useState } from 'react';
import './App.css';
// Importing components
import Form from './components/Form.js'; 
import TodoList from './components/TodoList.js';

function App() {
  const [inputText, setInputText] = useState(''); // value and action that give you a chance to change/update this value
  const [todo, setTodo] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <Form 
        inputText={inputText}
        setInputText={setInputText}
        todo={todo}
        setTodo={setTodo}
      />
      <TodoList todo={todo}
      />
    </div>
  );
}

export default App;
