import React from 'react'

import '../App.css';

const Task = ({tasks, time}) => {
  return (
    <div className='task'>
        <h1>TaskName: {tasks}</h1>
        <h1>Time to complete: {time}</h1>
    </div>
  )
}

export default Task