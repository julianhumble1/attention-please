import { Modal, Button } from "react-bootstrap";

const ErrorModal = ({ error, show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>{error}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} role="close">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ErrorModal;
