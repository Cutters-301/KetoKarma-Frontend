import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {withAuth0}  from "@auth0/auth0-react";
import {GiHealthPotion} from 'react-icons/gi';



export class PlanFormModal extends Component {
render() {
        return (
            <div>

                <Modal show={this.props.show} onHide={this.props.handelDisplayModal}>
                    <Modal.Header closeButton onClick={this.props.handleClose}>
                        <Modal.Title>Diet Plan</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(e)=>this.props.addPlan(e)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Breakfast</Form.Label>
                                <Form.Control 
                                type="text"   name="breakfast"  />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Lunch</Form.Label>
                                <Form.Control  name="lunch"
                               type="text"  />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Dinner</Form.Label>
                                <Form.Control type="text"  name="dinner" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Fruits</Form.Label>
                                <Form.Control type="text"  name="fruits" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Vegetables</Form.Label>
                                <Form.Control type="text"  name="vegetables"  />
                            </Form.Group>


                            <Button variant="primary" type="submit" style={{backgroundColor:"pink" , color:"black"}}>
                                Add <GiHealthPotion size='1.5em' /> 
  </Button>
  <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}


export default withAuth0(PlanFormModal);