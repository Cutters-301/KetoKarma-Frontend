
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/calculator.css';
import Form from 'react-bootstrap/Form';
import { Row, Col, Button } from 'react-bootstrap';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


export class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            calories: null,
            fat: null,
            protin: null,
            carbs: null,
            toggle: false,
            show: false,

        }

    }
    toggleSwitch = () => {
        this.setState({
            toggle: true,
        })
    }
    

    calculateCalories = (e) => {
        e.preventDefault();
        const weight = e.target.weight.value;
        const height = e.target.height.value;
        const age = e.target.age.value;
        // const gender = e.target.gender.value;
        const activeState = e.target.activeState.value;


        let bmr;
        let grams;
        let cal;

        if (this.state.toggle) {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
            switch (activeState) {
                case 'Sedentary':
                    cal = 1.2 * bmr
                    break;
                case 'Light':
                    cal = 1.375 * bmr
                    break;
                case 'Moderate':
                    cal = 1.55 * bmr
                    break;
                case 'Very':
                    cal = 1.725 * bmr
                    break;
                default:

            }
            grams = cal * 0.129598

        }
        else {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
            switch (activeState) {
                case 'Sedentary':
                    cal = 1.2 * bmr
                    break;
                case 'Light':
                    cal = 1.375 * bmr
                    break;
                case 'Moderate':
                    cal = 1.55 * bmr
                    break;
                case 'Very':
                    cal = 1.725 * bmr
                    break;
                default:
        

            }
            grams = cal * 0.129598

        }
        this.setState({
            calories: cal,
            fat: grams * 0.7,
            protin: grams * 0.25,
            carbs: grams * 0.05,
            show: true
        })

    }

    render() {
        console.log(this.state.calories);
        console.log(this.state.fat);
        console.log(this.state.protin);
        console.log(this.state.carbs)
        console.log(this.state.toggle)
        return (
            <div>
                
                <Form style={{ border: '5px solid rgb(92, 83, 83)', 'margin-top': '20px', 'margin-bottom': '20px', padding: '15px' }} noValidate onSubmit={this.calculateCalories}>
                    <Row className="mb-3">
                        <div class = 'container'>
                        <center>
                        <span>
                            <h2 class = 'gender'>
                                Gender
                            </h2>
                            <h2 class="left">
                                    Male
                                    </h2>
                            </span>
                            <input onClick={this.toggleSwitch} type="checkbox" id="toggle" class="toggle--checkbox"/>
                    
                         
                            <label for="toggle" class="toggle--label">
                                <span class="toggle--label-background"></span>
                            </label>
                         
                           
                            <div class="background"></div>
                            <span>
                                <h2 class='right'>
                                    Female
                                </h2>
                                </span>
                        </center>
                        </div>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationFormik01">
                            <Form.Label class='font'>Weight</Form.Label>
                            <Form.Control
                                type="number"
                                name="weight"
                                placeholder="Weight"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationFormik02">
                            <Form.Label class='font'>Height</Form.Label>
                            <Form.Control
                                type="number"
                                name="height"
                                placeholder="Height"
                            />

                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationFormik03">
                            <Form.Label class='font'>Age</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Age"
                                name="age"
                            />


                        </Form.Group>
                    </Row>

                    <FormLabel class='font' component="legend">Active State</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" name='activeState' class='MuiFormControlLabel'>
                        <Row xs={1} md={1} className='g-4'>
                            <Col>   <FormControlLabel value="Sedentary" control={<Radio />} label="Sedentary" />
                                <FormControlLabel value="Light" control={<Radio />} label="Light Activity" />
                            </Col>
                        </Row>
                        <Row xs={1} md={1} className='g-4'>
                            <Col>
                                <FormControlLabel value="Moderate" control={<Radio />} label="Very Active" />
                                <FormControlLabel value="Very" control={<Radio />} label="Moderate Activity" />
                            </Col>
                        </Row>
                    </RadioGroup>

                    <center style={{ 'margin-top': '1%' }}>
                        <Button style={{ 'background-color': 'rgb(39, 134, 44, 0.7) ', border: 'none' }} type="submit">Calculate</Button> </center>
                </Form>

                <div class='result' style ={this.state.show ? {diplay:'block'}:{display:"none"}}
>
                    <div class='line1'>

                        <hr class='hr1'></hr>
                        <p style={{ display: 'inline-block', 'margin-top': '10px' }}>
                            Calories: {parseInt(this.state.calories)}

                        </p>
                    </div>
                    <div class='line2'>
                        <hr class='hr2'></hr>
                        <p>
                            Carbs: {parseInt(this.state.carbs)}
                        </p>
                    </div>
                    <div class='line3'>
                        <hr class='hr3'></hr>
                        <p>
                            Protin: {parseInt(this.state.protin)}
                        </p>
                    </div>
                    <div class='line4'>
                        <hr class='hr4'></hr>
                        <p>
                            Fats: {parseInt(this.state.fat)}
                        </p>
                    </div>
<p>
Based on your inputs, we suggest you eat: {parseInt(this.state.calories)} calories. From those, {parseInt(this.state.fat)}g fats, {parseInt(this.state.carbs)}g net carbs, and {parseInt(this.state.protin)}g protein.
</p>
                </div>
            </div>
        )
    }
}

export default Calculator;
