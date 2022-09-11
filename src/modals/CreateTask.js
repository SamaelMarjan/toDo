import React from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({modal, toggle}) => {
  return (
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>create task</ModalHeader>
        <ModalBody>
          <form>
            <div className='form_group'>
                <label>Task Name</label>
                <input type='text' className='form-control' />
            </div>
            <div className='form_group'>
                <label>Description</label>
                <textarea rows='5' className='form-control'></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
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