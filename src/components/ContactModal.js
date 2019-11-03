import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function ContactModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton>
      </Modal.Header> */}
      <Modal.Body>
        <Form className="contact-form" closeButton>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="font-weight-bold">NAME</Form.Label>
            <Form.Control type="name" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="font-weight-bold">EMAIL</Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="font-weight-bold">MESSAGE</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="btn-contact-container">
          <button className="btn-contact" type="button" onClick={props.onHide}>
            Nice to meet you!
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
