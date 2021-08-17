import React, { Component } from 'react';
import '../styling/calculator.css';
import Header from '../component/Header';
import Footer from '../component/Footer';

export class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            calories: null,
            fat: null,
            protin: null,
            carbs: null,

        }

    }

    calculateCalories = (e) => {
        e.preventDefault();
        const weight = e.target.weight.value;
        const height = e.target.height.value;
        const age = e.target.age.value;
        const gender = e.target.gender.value;
        const activeState = e.target.activeState.value;


        let bmr;
        let grams;
        let cal;

        if (gender === 'Female') {
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
        else if (gender === 'Male') {
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
        })

    }

    render() {
        console.log(this.state.calories);
        console.log(this.state.fat);
        console.log(this.state.protin);
        console.log(this.state.carbs)
        return (
            <div>
                <Header />
                <form onSubmit={this.calculateCalories}>
                    <input type="checkbox" id="toggle" class="toggle--checkbox"/>
                        <label for="toggle" class="toggle--label">
                            <span class="toggle--label-background"></span>
                        </label>
                        <div class="background"></div>
                        {/* <div class="shade">
                        <div class="blackboard">
                            <div class="form">
                                <p>
                                    <label>Weight </label>
                                    <input name='weight' type="number" />
                                </p>
                                <p>
                                    <label>Height </label>
                                    <input name='height' type="number" />
                                </p>
                                <p>
                                    <label>Age </label>
                                    <input name='age' type="number" />
                                </p>
                                <p>
                                    <label>Gender </label>
                                    <select name="gender">
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </p>
                                <p>
                                    <label>How Active Are You? </label>
                                    <select name="activeState">
                                        <option value="Sedentary">Sedentary</option>
                                        <option value="Light">Light Activity</option>
                                        <option value="Moderate">Moderate Activity</option>
                                        <option value="Very">Very Active</option>
                                    </select>
                                </p>
                                <p class="wipeout">
                                    <input type="submit" value="Calculate" />
                                </p>
                            </div>
                        </div>
                    </div> */}
                </form>
                    <div class="progress">
                        <div class="progress-value1">
                            <p class='info'>Calories </p>
                        </div> <br />
                        <div class="progress-value2">
                            <p class='info'>Protin </p>
                        </div> <br />
                        <div class="progress-value3">
                            <p class='info'>Carbs </p>
                        </div> <br />
                        <div class="progress-value4">
                            <p class='info'>Fats </p>
                        </div>
                    </div>
                    <br />

                    <Footer />
            </div>
                )
    }
}

                export default Calculator;
