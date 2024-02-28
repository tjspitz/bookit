import { Dispatch, SetStateAction } from 'react';
import { Button, Image, Modal } from 'react-bootstrap';

const SelfDestruct = ({
  modalShow,
  setModalShow,
}: {
  modalShow: boolean;
  setModalShow: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleClose = () => {
    setModalShow(!modalShow);
  };
  return (
    <Modal
      size="lg"
      centered
      show={modalShow}
      onHide={handleClose}
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>Self Destruct Activated!</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center">
        <Image
          src="https://c.tenor.com/0B9-lEwbYTYAAAAC/tenor.gif"
          fluid
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-dark"
          onClick={handleClose}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SelfDestruct;
