import React, { Component } from 'react'
import Team1 from '../assets/MyProfile-Image.jpeg';
import Footer from '../component/Footer';
import '../styling/aboutus.css'

export class AboutUs extends Component {
    render() {
        return (
            <div className="body" >
                <div className="aboutUs">
                    <div className="mission">
                        <h1 className="title"><span>Our Mission</span></h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere saepe fugiat esse aperiam dicta cum soluta. Magnam provident ipsum esse blanditiis, rerum perferendis incidunt dignissimos maiores temporibus aliquam tempora dicta.</p>
                    </div>
                    <div className="vision">
                        <h1 className="title"><span>Our Vision</span></h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere saepe fugiat esse aperiam dicta cum soluta. Magnam provident ipsum esse blanditiis, rerum perferendis incidunt dignissimos maiores temporibus aliquam tempora dicta.</p>
                    </div>
                    <div className="team">
                        <h1 className="title"> <span>Meet Our Team</span></h1>
                        <div class="py-5 team4">
                            <div class="container">
                                <div class="row justify-content-center mb-4">

                                </div>
                                <div class="row">

                                    <div class="col-lg-3 mb-4">

                                        <div class="row">
                                            <div class="col-md-12">
                                                <img src={Team1} alt="wrapkit" class="img-fluid rounded-circle" />
                                            </div>
                                            <div class="col-md-12 text-center">
                                                <div class="pt-2">
                                                    <h5 class="mt-4 font-weight-medium mb-0">Mohammad AL-Khaleel</h5>
                                                    <h6 class="subtitle mb-3">Mechatronics Engineer</h6>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                    <a href="https://mohammad-alkhaleel-portfolio.netlify.app/"><img class="contact" src="https://cdn0.iconfinder.com/data/icons/web-design-v3-2/64/web_developer_coding_code_brackets_online_web-512.png" alt="" /></a>
                                                    <a href="https://github.com/malkhaleel88"><img class="contact" src="https://cdn3.iconfinder.com/data/icons/colorful-guache-social-media-logos-1/159/social-media_GitHub-256.png" alt="" /></a>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-lg-3 mb-4">

                                        <div class="row">
                                            <div class="col-md-12">
                                                <img src="https://avatars.githubusercontent.com/u/64333354?v=4" alt="wrapkit" class="img-fluid rounded-circle" />
                                            </div>
                                            <div class="col-md-12 text-center">
                                                <div class="pt-2">
                                                    <h5 class="mt-4 font-weight-medium mb-0">Marah <br /> Musleh</h5>
                                                    <h6 class="subtitle mb-3">Copmuter Engineer</h6>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                    <a href="https://mohammad-alkhaleel-portfolio.netlify.app/"><img class="contact" src="https://cdn0.iconfinder.com/data/icons/web-design-v3-2/64/web_developer_coding_code_brackets_online_web-512.png" alt="" /></a>
                                                    <a href="https://github.com/malkhaleel88"><img class="contact" src="https://cdn3.iconfinder.com/data/icons/colorful-guache-social-media-logos-1/159/social-media_GitHub-256.png" alt="" /></a>


                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                    <div class="col-lg-3 mb-4">

                                        <div class="row">
                                            <div class="col-md-12">
                                                <img src="https://avatars.githubusercontent.com/u/83533439?v=4" alt="wrapkit" class="img-fluid rounded-circle" />
                                            </div>
                                            <div class="col-md-12 text-center">
                                                <div class="pt-2">
                                                    <h5 class="mt-4 font-weight-medium mb-0">Omaimah <br /> Sulaiman</h5>
                                                    <h6 class="subtitle mb-3">Web Developer</h6>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                    <a href="https://mohammad-alkhaleel-portfolio.netlify.app/"><img class="contact" src="https://cdn0.iconfinder.com/data/icons/web-design-v3-2/64/web_developer_coding_code_brackets_online_web-512.png" alt="" /></a>
                                                    <a href="https://github.com/malkhaleel88"><img class="contact" src="https://cdn3.iconfinder.com/data/icons/colorful-guache-social-media-logos-1/159/social-media_GitHub-256.png" alt="" /></a>


                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-lg-3 mb-4">

                                        <div class="row">
                                            <div class="col-md-12">
                                                <img src="https://avatars.githubusercontent.com/u/83514326?v=4" alt="wrapkit" class="img-fluid rounded-circle" />
                                            </div>
                                            <div class="col-md-12 text-center">
                                                <div class="pt-2">
                                                    <h5 class="mt-4 font-weight-medium mb-0">Bayan <br /> Hmaidy</h5>
                                                    <h6 class="subtitle mb-3">Web Developer</h6>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                    <a href="https://mohammad-alkhaleel-portfolio.netlify.app/"><img class="contact" src="https://cdn0.iconfinder.com/data/icons/web-design-v3-2/64/web_developer_coding_code_brackets_online_web-512.png" alt="" /></a>
                                                    <a href="https://github.com/malkhaleel88"><img class="contact" src="https://cdn3.iconfinder.com/data/icons/colorful-guache-social-media-logos-1/159/social-media_GitHub-256.png" alt="" /></a>


                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default AboutUs
