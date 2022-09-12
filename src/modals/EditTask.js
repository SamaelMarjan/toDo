import React, { useEffect, useState } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = ({modal, toggle, updateTask, taskObj}) => {
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

  useEffect (() => {
    setTaskName(taskObj.Name)
    setDesc(taskObj.Description)
  }, [])

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {}
    tempObj['Name'] = taskName
    tempObj['Description'] = desc
    updateTask(tempObj)
  }

  return (
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>update task</ModalHeader>
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
          <Button color="primary" onClick={handleUpdate}>
            update
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
  );
}

export default EditTask;