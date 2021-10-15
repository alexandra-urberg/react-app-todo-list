import { useState, useEffect } from 'react';
import './App.css';
// Importing components
import Form from './components/Form.js'; 
import TodoList from './components/TodoList.js';

function App() {
  const [inputText, setInputText] = useState(''); // value and action that give you a chance to change/update this value
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState('all'); //change task status
  const [filter, setFilter] = useState([]); // to filter tasks

  useEffect(() => {
    getFromLocalStorage();
  }, []);

  useEffect(() => { //filter the status at state and save to local storage

    const saveTolocalStorage = () => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilter(tasks.filter((task) => task.completed === true));
          break;
        case 'uncompleted':
          setFilter(tasks.filter((task) => task.completed === false));
          break;
        default:
          setFilter(tasks);
          break;
      }
    };
    
    filterHandler();
    saveTolocalStorage();
  }, [tasks, status]);

  const getFromLocalStorage = () => {
    if(localStorage.getItem('tasks') === null) {
      localStorage.setItem('tasks', JSON.stringify([]));
    } else {
      let localStrg = JSON.parse(localStorage.getItem('tasks'));
      setTasks(localStrg);
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
        tasks={tasks}
        setTasks={setTasks}
        setStatus={setStatus}
      />
      <TodoList 
       setTasks={setTasks}
       tasks={tasks}
       filter={filter}
      />
    </div>
  );
}

export default App;
