import React, { useState } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({modal, toggle, save}) => {
  const [taskName, setTaskName] = useState('');
  const [desc, setDesc] = useState('');

  const handleChange = (e) => {
    const {name, value} = e.target

    if(name === 'taskName') {
      setTaskName(value)
    } else {
      setDesc(value)
    }
  }

  const handleSave = (e) => {
    e.preventDefault()
    let taskObj = {}
    taskObj['Name'] = taskName
    taskObj['Description'] = desc
    save(taskObj)
  }

  return (
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>create task</ModalHeader>
        <ModalBody>
          <form>
            <div className='form_group'>
                <label>Task Name</label>
                <input type='text' className='form-control' value={taskName} onChange={handleChange} name = "taskName" />
            </div>
            <div className='form_group'>
                <label>Description</label>
                <textarea rows='5' className='form-control' value={desc} onChange={handleChange} name = "description" ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            create
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
  );
}

export default CreateTask;