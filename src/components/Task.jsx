import React, { useState, useEffect }  from 'react';

import '../App.css';
import CreateTask from '../modals/CreateTask';
import Card from './Card';

const Task = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem('taskList')

    if(arr) {
      let obj = JSON.parse(arr)
      setTaskList(obj);
    }
  }, [])

  const saveTask = (taskObj) => {
    let tempList = taskList
    tempList.push(taskObj)
    localStorage.setItem('taskList', JSON.stringify(tempList))
    setTaskList(taskList)
    setModal(false)
  }

  const deleteTask = (index) => {
    let tempList = taskList
    tempList.splice(index, 1)
    localStorage.setItem('taskList', JSON.stringify(tempList))
    setTaskList(taskList)
    window.location.reload()
  }

  const toggle = () => {
    setModal(!modal);
  }

  return (
    <>
    <div className='header text-center'>
      <h3>Hello!</h3>
      <p>give me some advice. how can I improve myself?</p>
      <button className='btn btn-primary' onClick={() => setModal(true)}>create task</button>
    </div>
    <div className='task-container'>
      {
        taskList.map((obj, index) => {
          return (
            <>
            <Card taskObj={obj} index={index} deleteTask={deleteTask} />
            </>
          );
        })
      }
    </div>
    <CreateTask modal={modal} toggle={toggle} save= {saveTask} />
    </>
  )
}

export default Task