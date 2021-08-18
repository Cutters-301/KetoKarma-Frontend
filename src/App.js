import React from 'react';
import Recipes from './pages/Recipes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from './pages/Profile';
import LoginButton from './component/LoginButton';
import { withAuth0 } from '@auth0/auth0-react';
import Home from './pages/Home';
import Nutrition from './pages/Nutrition';
import Calculator from './pages/calculator';
import Header from "./component/Header";
import AboutUs from "./pages/Aboutus"
import Footer from "./component/Footer"
import {
  BrowserRouter as Router,
  Switch,
  Route,


} from "react-router-dom";



class App extends React.Component {

  render() {
    return (
      <>
       <Header/>

         <Router>
           
            <Switch>
              <Route exact path="/">
              <Home />
              {this.props.auth0.isAuthenticated && <LoginButton/>}
              </Route>
              <Route exact path="/profile">
              {this.props.auth0.isAuthenticated && <Profile/>}
              </Route>
              <Route exact path="/recipe" component={Recipes} />
              <Route exact path="/nutrition">
                <Nutrition/>
              </Route>
              <Route exact path="/calculator" component={Calculator} />
              <Route exact path="/aboutUs" component={AboutUs} />
              
            </Switch>
        </Router>
        <Footer/>
      </>
      
    );
  }
}

export default withAuth0(App);