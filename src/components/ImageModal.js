import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import ImageList from '../components/ImageList';

const ImageModal = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        View Description
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        {/* INJECTED 'props.explanation' from 'Image' */}
        <ModalBody>{props.explanation}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default ImageModal;
