import { useState, useEffect } from 'react';
import './App.css';
// Importing components
import Form from './components/Form.js'; 
import TodoList from './components/TodoList.js';

function App() {
  const [inputText, setInputText] = useState(''); // value and action that give you a chance to change/update this value
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState('all'); //change task status
  const [filter, setFilter] = useState([]); // to filter tasks

  useEffect(() => {
    getFromLocalStorage();
  }, []);

  useEffect(() => { //filter the status at state

    const saveTolocalStorage = () => {
      localStorage.setItem('todo', JSON.stringify(todo));
    }

    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilter(todo.filter((tod) => tod.completed === true));
          break;
        case 'uncompleted':
          setFilter(todo.filter((tod) => tod.completed === false));
          break;
        default:
          setFilter(todo);
          break;
      }
    };
    
    filterHandler();
    saveTolocalStorage();
  }, [todo, status]);

  const getFromLocalStorage = () => {
    if(localStorage.getItem('todo') === null) {
      localStorage.setItem('todo', JSON.stringify([]));
    } else {
      let localstrg = JSON.parse(localStorage.getItem('todo'));
      setTodo(localstrg);
    }
  }

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
        setStatus={setStatus}
      />
      <TodoList 
       setTodo={setTodo}
       todo={todo}
       filter={filter}
      />
    </div>
  );
}

export default App;
