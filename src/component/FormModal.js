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
                <Form.Control style={{ border: "1px solid black" }} name="userName" type="text" placeholder="Enter Your Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Date And Time</Form.Label>
                <Form.Control style={{ border: "1px solid black" }} name="appointDateTime" type="datetime-local" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control style={{ border: "1px solid black" }} name="userTelephone" type="tel" placeholder="xxx-xxx-xxxx" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nutritionist</Form.Label>  <br />
              <select style={{ width: "100%", height: "38px", borderRadius: "4px", border: "1px solid black" }} name="nutritionist" aria-label="Default select example">
                <option>Open This Select Menu</option>
                <option value="1">Mohammad Attieh</option>
                <option value="2">Faten Marji</option>
                <option value="3">Dieaa Hindi</option>
                <option value="4">Ragad Aloqaile</option>
                <option value="5">Mohammad Ashqar</option>
                <option value="6">Dima Kilani</option>
              </select>
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