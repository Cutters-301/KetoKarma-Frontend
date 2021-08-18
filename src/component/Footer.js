import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { Logo } from "../assets/keto-logo.jpg"
import '../styling/Footer.css'


export class Footer extends Component {
    render() {
        return (
            <>
                <footer class="site-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-6">
                                <h6>KetoKarma</h6>
                                <p class="text-justify"> <i> KetoKarma </i> Is a Diet Platform That Help You To Be Healthy In Your Life Style.</p>
                                <input class="bar" type="text" value="" placeholder="Search ..." />
                                <input class="search" type="button" value="Search" /> <br />
                                {/* <img src={ Logo } alt="Keto" /> */}
                            </div>

                            <div class="col-xs-6 col-md-3">
                                <h6>Contact</h6>
                                <ul class="footer-links">
                                    Address:<li> Jordan, Amman <br /> P.O:12345 </li>
                                    Email:<li>info@example.com</li>
                                    Phone:<li>+962-6594846</li>

                                </ul>
                            </div>
                            <div class="col-xs-6 col-md-3">
                                <h6>Quick Links</h6>
                                <ul class="footer-links">

                                

                                    <li> <Link exact to="/aboutus" >About Us</Link></li>
                                    <li> <Link  exact to="/recipe" >Recipes</Link></li>
                                    <li><Link exact  to="/" >Home</Link></li>

                                    <li><Link to="/faqs" ><a href={() => false}>FAQs</a></Link></li>
                                    <li ><a href="/#">LogOut</a></li>
                                </ul>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-sm-6 col-xs-12">
                                <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by
                                    <a href="#top"> KetoKarma</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </>

        )
    }
}

export default Footer;