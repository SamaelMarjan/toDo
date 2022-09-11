import React from 'react'
import { useState } from 'react';

import '../App.css';
import CreateTask from '../modals/CreateTask';

const Task = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal)
  }

  return (
    <>
    <div className='header text-center'>
      <h3>todo list</h3>
      <button className='btn btn-primary mt-2' onClick={() => setModal(true)}>create task</button>
    </div>
    <CreateTask modal={modal} toggle={toggle} />
    </>
  )
}

export default Task