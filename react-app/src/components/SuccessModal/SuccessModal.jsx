import { Modal, Button } from "react-bootstrap";

const SuccessModal = ({ message, show, close }) => {
  return (
    <Modal show={show} onHide={() => close()}>
      <Modal.Header closeButton>
        <Modal.Title>Success</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => close()} role="close">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default SuccessModal;
