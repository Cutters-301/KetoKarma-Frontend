import React, { Component } from 'react';
import '../styling/profile.css';
import { withAuth0 } from '@auth0/auth0-react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HiOutlineMail} from 'react-icons/hi';



export class Profilepage extends Component {
    render() {
        const { user, isAuthenticated } = this.props.auth0;
        return (
            <div>
<body class="profile-page">
    <nav class="navbar navbar-color-on-scroll navbar-transparent    fixed-top  navbar-expand-lg "  color-on-scroll="100"  id="sectionsNav">
        <div class="container">
            <div class="navbar-translate">
                <a class="navbar-brand" href="https://demos.creative-tim.com/material-kit/index.html" target="_blank"></a>
               
            </div>
                       
        </div>
    </nav>
    
    <div class="page-header header-filter" data-parallax="true" style={{backgroundImage:"ttp://wallpapere.org/wp-content/uploads/2012/02/black-and-white-city-night.png" , height:"130px" }}></div>
    <div class="main main-raised" style={{height:"540px"}}>
		<div class="profile-content">
            <div class="container">
                <div class="row">
	                <div class="col-md-6 ml-auto mr-auto">
        	           <div class="profile">
	                        <div class="avatar">
	                            <img src= {user.picture}alt="Circle Image" class="img-raised rounded-circle img-fluid" />
	                        </div>
	                        <div class="name">
	                            <h3 class="title">{user.name}</h3>
                                <h6 class ="title"><HiOutlineMail size='1.5em'/> {user.email}</h6>
								<h2 class="hello">Hello , {user.name}! Welcom to our membership</h2>
								<a href="#pablo" class="btn btn-just-icon btn-link btn-dribbble"><i class="fa fa-dribbble"></i></a>
                                <a href="#pablo" class="btn btn-just-icon btn-link btn-twitter"><i class="fa fa-twitter"></i></a>
                                <a href="#pablo" class="btn btn-just-icon btn-link btn-pinterest"><i class="fa fa-pinterest"></i></a>
	                        </div>
	                    </div>
    	            </div>
                </div>
                <div class="description text-center">
                    <h2 className="article">Give yourself FULL ACCESS to the BEST keto recipes, meal plans, support, and better health. It's not a short team diet , It's a long team lifestyle. </h2>
                </div>
				<div class="row">
					<div class="col-md-6 ml-auto mr-auto">
                        <div class="profile-tabs">
                          <ul class="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                          <h3 class="title" style={{color:"pink"}}>Your Recipes Gallery</h3>  
                            <li class="nav-item">
                                <a class="nav-link active" href="#studio" role="tab" data-toggle="tab">
                                  <i class="material-icons"></i>
                                  Studio
                                </a>
                            </li>
                            
    
                          </ul>
                        </div>
    	    	</div>
            </div>
          <div class="tab-content tab-space">
            <div class="tab-pane active text-center gallery" id="studio">
  				<div class="row">
                  <center> 
  					<div class="col-md-3 ml-auto">
                      <Row>     
                     <Col>
  					    <img src="https://parade.com/wp-content/uploads/2020/11/Avocado-Recipes-1-e1604963783908.jpg" class="rounded" />
  						</Col>
                         
                          <Col>
                          
                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-200114-baked-avocado-boats-0346-portrait-pf-1580223291.jpg?crop=1.00xw:0.667xh;0,0.204xh&resize=480:*" class="rounded" />
                        </Col>
                        </Row>
                      </div>
  					<div class="col-md-3 mr-auto">
                       <Row> 
                      <Col>
  						<img src="https://images.ctfassets.net/lzukox2jf57a/4tBmFJvc8odWAFy5HznVxS/ceb3258f5768f1ff6973b5cee20132c3/Pete_and_Gerrys-_Feb_2019-186.jpg" class="rounded" />
  						</Col>
                          <Col>
                          <img src="https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/09/431538-1-eng-GB_4973_1-768x768.jpg" class="rounded" />
                          </Col>
                          </Row>
                         
  					</div>
              {/* </Row> */}
              </center>
  				</div>
              
  			</div>
          </div>

    
            </div>
        </div>
        
	</div>
 	
	


</body>
</div>
        )
    }
}

export default withAuth0(Profilepage);
