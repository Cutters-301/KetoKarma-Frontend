import React, { Component } from 'react';
import '../styling/profile.css';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HiOutlineMail} from 'react-icons/hi';
import {FiFacebook} from 'react-icons/fi';
import {GrTwitter} from 'react-icons/gr';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FaSnapchatGhost} from 'react-icons/fa';


export class Profilepage extends Component {
    render() {
        const { user} = this.props.auth0;
        return (
            <div class="body">
            <aside class="profile-card" >
            <header >
              <a target="_blank" href="#">
                <img src={user.picture} class="hoverZoomLink" /> 
              </a>
          
              <h1>
                      {user.name}
                    </h1>
          
              <h2>
                        <HiOutlineMail size='1.5em' /> {user.email}
                    </h2>
          
            </header>
          
            <div class="profile-bio">
          
              <p>
                It takes monumental improvement for us to change how we live our lives. Design is the way we access that improvement.
              </p>
          
            </div>
          
            <ul class="profile-social-links">
              <li>
                <FiFacebook size='1.5em' />
              </li>
              <li>
                  <GrTwitter size='1.5em'/>
              </li>
              <li>
                <AiOutlineInstagram size='1.5em' />
              </li>
              <li>
                 <FaSnapchatGhost size='1.5em' />
              </li>
            </ul>
          </aside>
          </div>
        )
    }
}

export default withAuth0(Profilepage);
