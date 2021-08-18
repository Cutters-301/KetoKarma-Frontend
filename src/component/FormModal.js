import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

export class FormModal extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleDisplayModal}>
          <Modal.Header>
            <Modal.Title >Appointment Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => this.props.handleSubmitForm(e)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label >Name</Form.Label>
                <Form.Control name="userName" type="text" placeholder="Enter Your Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Date And Time</Form.Label>
                <Form.Control name="appointDateTime" type="datetime-local"  />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control name="userTelephone" type="tel" placeholder="xxx-xxx-xxxx" />
              </Form.Group>
              
              <Button variant="primary" type="submit">
                Book
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleDisplayModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default FormModal;