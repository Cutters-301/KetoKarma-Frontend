import React, { Component } from 'react';
import '../styling/Header.css';
import { GiKnifeFork } from 'react-icons/gi';
import { TiCalculator } from 'react-icons/ti';
import { VscPerson } from 'react-icons/vsc';
import { BsBoxArrowInDown } from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import { Link } from "react-router-dom";
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';
import Logo from '../assets/log.png';
import LoginButton from './LoginButton';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    withRouter,
    NavLink,
  
  } from "react-router-dom";

class Header extends Component {
  render() {
    const { isAuthenticated }=this.props.auth0;
    return (
      <header >
          {/* <div className="img">
          <img src={Logo} alt="logo" style={{width:"20%" , marginTop:"-90px"}} />
          </div> */}
        <div id='navbar'>
            <a href='/'>
            <BsBoxArrowInDown size='1.2em' />
            <br />
            HOME
            </a>
          <a href='/recipe'>
            <GiKnifeFork size='1.2em' />
            <br />
            KETO RECIPES
          </a>
          <a href='/calculator'>
            <TiCalculator size='1.2em' />
            <br />
            CALCULATOR
          </a>
          <a href='/nutrition'>
            <VscPerson size='1.2em' />
            <br />
            NUTRITIONIST
          </a>
          <Router>
          {isAuthenticated ? <>
        <a href="/profile">
        <CgProfile size='1.2em' />
        <br />    
        Profile</a>
        <LogoutButton style={{marginLeft:"90%"}}/> </> : <LoginButton/> }
        </Router>
        </div>
        <div className='overlay'>
          <h1 className="website">Keto Karma</h1>
          <h2>
            Whatever The reason you are eating , Keto Karma never give up!
          </h2>
          <br />
          {/* <button>READ MORE</button> */}
        </div>
        <br/>
        <br/>
      </header>
    );
  }
}

export default withAuth0(Header);
