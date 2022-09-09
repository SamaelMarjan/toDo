import { useState } from 'react';
import './App.css';
import Task from './components/Task';

function App() {
  const [task, setTask] = useState('');
  const [time, setTime] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    setTaskList([...taskList, {task: task, time: time}])
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <label>Task Name:</label>
      <input 
        type='text'
        id='task'
        onChange={(e) => {
          setTask(e.target.value)
        }}
      />
      <label>Time:</label>
      <input 
        type='text'
        id='time'
        onChange={(e) => {
          setTime(e.target.value)
        }}
      />
      <button onClick={addTask}>Add</button>
      {
        taskList.map((task) => {
          return (
            <Task tasks={task.task} time={task.time} />
          );
        })
      }
    </div>
  );
}

export default App;
