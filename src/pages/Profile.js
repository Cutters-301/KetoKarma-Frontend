import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Table from 'react-bootstrap/Table';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import  { UpdatePlanForm } from '../component/UpdatePlanForm';
import { GrEdit } from 'react-icons/gr';
import { TiDelete } from 'react-icons/ti';
import { RiHeartAddLine } from 'react-icons/ri';
import PlanFormModal from '../component/PlanFormModal';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerEmail: this.props.auth0.user.email,
      plans: [],
      displayAddModal: false,
      showUpdateModal: false,
      closeFormByButton:true,
      updateplanObj: {}, // i need a new obj for the updated data
    };
  }

  handleClose =() =>{
    this.setState({closeFormByButton:false});
  };

  componentDidMount() {
    this.fetchPlans();
  }

  handelDisplayModal = () => {
    this.setState({ displayAddModal: true });
  };

  handelUpdatedModal = (item) => {
    this.setState({ showUpdateModal: true, updateplanObj: item });
  };

  fetchPlans = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_SERVER}/plan?email=${this.state.ownerEmail}`
      )
      .then((axiosResponse) => {
        this.setState({
          plans: axiosResponse.data,
        });
      })
      .catch((error) => alert(error));
  };

  addPlan = (e) => {
    e.preventDefault();

    const body = {
      ownerEmail: this.props.auth0.user.email,
      Breakfast: e.target.breakfast.value,
      Lunch: e.target.lunch.value,
      Dinner: e.target.dinner.value,
      Fruits: e.target.fruits.value,
      Vegetables: e.target.vegetables.value
    };

    axios
      .post(`${process.env.REACT_APP_SERVER}/plans`, body)
      .then((axiosResponse) => {
        // console.log(axiosResponse.data);
        this.state.plans.push(axiosResponse.data);
        this.setState({
          plans: this.state.plans,
        });
      })
      .catch((error) => alert(error));
    this.setState({ displayAddModal: false });
  };

  deletePlan = (index) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER}/plans/${index}`)
      .then((axiosResponse) => {
        if (axiosResponse) {
          const deletedplan = this.state.plans.filter(
            (plan) => plan._id !== index
          );
          this.setState({
            plans: deletedplan,
          });
        }
      })
      .catch((error) => alert(error));
  };

  UpdatePlan = (e) => {
    e.preventDefault();
    const planId = this.state.updateplanObj._id;
    const body = {
      Breakfast: e.target.breakfast.value,
      Lunch: e.target.lunch.value,
      Dinner: e.target.dinner.value,
      Fruits: e.target.fruits.value,
      Vegetables: e.target.vegetables.value
    };
    axios
      .put(`${process.env.REACT_APP_SERVER}/plans/${planId}`, body)
      .then((axiosResponse) => {
        console.log('updated plan Data:  ', axiosResponse.data);

        const updatedPlanArr = this.state.plans.map((plan) => {
          if (plan._id === planId) {
            plan.Breakfast = axiosResponse.data.Breakfast;
            plan.Lunch = axiosResponse.data.Lunch;
            plan.Dinner = axiosResponse.data.Dinner;
            plan.Fruits = axiosResponse.data.Fruits;
            plan.Vegetables = axiosResponse.data.Vegetables;

            return plan;
          }
          return plan;
        });
        this.setState({ plans: updatedPlanArr });
        this.handelUpdatedModal({});
        this.setState({ showUpdateModal: false });
      })
      .catch((error) => alert(error));
  };

  render() {
    return (
      <div>
        <>
        <h1>Create Your Own Keto Diet Plan!</h1>
        <Button variant="secondary" onClick={() => this.handelDisplayModal()}><RiHeartAddLine /> </Button>

        <PlanFormModal 
                 show={this.state.displayAddModal}
                 handelDisplayModal={this.handelDisplayModal}
                 addPlan={this.addPlan}
                 handleClose={this.handleClose}
                /> 

          {this.state.showUpdateModal && (
            <UpdatePlanForm
              show={this.state.showUpdateModal}
              close={this.handelUpdatedModal}
              UpdatePlan={this.UpdatePlan}
              updateplanObj={this.state.updateplanObj}
            />
          )}
          <Table striped bordered hover variant='dark'>
            <thead>
              <tr>
                <th>#</th>
                <th>Breakfast</th>
                <th>Lunch</th>
                <th>Dinner</th>
                <th>Fruits</th>
                <th>Vegetables</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            {this.state.plans.length > 0 &&
              this.state.plans.map((plan, id) => (
                <tbody>
                  <tr>
                    <td>Day{id}</td>
                    <td>{plan.Breakfast}</td>
                    <td>{plan.Lunch}</td>
                    <td>{plan.Dinner}</td>
                    <td>{plan.Fruits}</td>
                    <td>{plan.Vegetables}</td>
                    <td>
                      {/* <a class = "btn border-shadow update">
            <span class="text-gradinet"><i class="fas fa-pencil-alt"></i></span>
            </a>
            <a class = "btn border-shadow delete">
            <span class="text-gradinet"><i class="fas fa-times"></i></span>
            </a> */}
                      <Button
                        variant='outline-danger'
                        onClick={() => this.handelUpdatedModal(plan)}
                      >
                        <GrEdit size='1.2em' />{' '}
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant='outline-danger'
                        onClick={() => this.deletePlan(plan._id)}
                      >
                        <TiDelete size='1.4em' />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              ))}
          </Table>
        </>
      </div>
    );
  }
}

export default withAuth0(Profile);
