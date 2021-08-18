import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {withAuth0}  from "@auth0/auth0-react";
import {GoThumbsup} from 'react-icons/go';



export class UpdatePlanForm extends Component {
render() {
        return (
            <div>

                <Modal show={this.props.show} onHide={this.props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Your Plan</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(e)=>this.props.UpdatePlan(e)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Breakfast</Form.Label>
                                <Form.Control 
                                type="text"   name="breakfast" defaultValue={this.props.updateplanObj.Breakfast}  />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Lunch</Form.Label>
                                <Form.Control  name="lunch" defaultValue={this.props.updateplanObj.Lunch}
                               type="text"  />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Dinner</Form.Label>
                                <Form.Control type="text"  name="dinner"  defaultValue={this.props.updateplanObj.Dinner}  />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Fruits</Form.Label>
                                <Form.Control type="text"  name="fruits"  defaultValue={this.props.updateplanObj.Fruits}  />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Vegetables</Form.Label>
                                <Form.Control type="text"  name="vegetables"  defaultValue={this.props.updateplanObj.Vegetables}  />
                            </Form.Group>


                            <Button variant="primary" type="submit" style={{backgroundColor:"pink" , color:"black"}}>
                                Edit <GoThumbsup size='1.3em' />
  </Button>
  <Modal.Footer>
            <Button variant="secondary" onClick={this.props.close}>
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


export default withAuth0(UpdatePlanForm);