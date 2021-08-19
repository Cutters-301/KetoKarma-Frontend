import React, { Component } from 'react'
import Team1 from '../assets/MyProfile-Image.jpeg';
import '../styling/aboutUs.css';
import Background from '../assets/bayan.jpg';

export class AboutUs extends Component {
    render() {
        return (
            <div>
                <div className="aboutUs">
                    <div className="mission">
                        <h1 className="title"><span>Our Mission</span></h1>
                        <p>Keto Karma's mission is to make the world a better place by helping people own optimal health, using the keto diet as an entry point.</p>
                    </div>
                    <div className="vision">
                        <h1 className="title"><span>Our Vision</span></h1>
                        <p>We believe keto is simple.
Once you have the right information with easy-to-follow recipes, using ingredients found in UK stores, keto doesn’t require hours in the kitchen. It’s just delicious food providing your body with the nutrition it needs.

We are committed to building a community rooted in positivity and support, celebrating the highs and embracing the lows.</p>
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
                                                    <h5 class="mt-4 font-weight-medium mb-0">Mohammad <br />AL-Khaleel</h5>
                                                    <h6 class="subtitle mb-3">Mechatronics Engineer</h6>
                                                    <p>I started out of nothing just like great men, and I’m heading to something
</p>
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
                                                    <p>I speak my mind. I never mind what I speak.</p>
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
                                                    <h6 class="subtitle mb-3">Computer Engineer</h6>
                                                    <p>I know there are very few who like to listen, so I speak less because.</p>
                                                    <a href="https://mohammad-alkhaleel-portfolio.netlify.app/"><img class="contact" src="https://cdn0.iconfinder.com/data/icons/web-design-v3-2/64/web_developer_coding_code_brackets_online_web-512.png" alt="" /></a>
                                                    <a href="https://github.com/malkhaleel88"><img class="contact" src="https://cdn3.iconfinder.com/data/icons/colorful-guache-social-media-logos-1/159/social-media_GitHub-256.png" alt="" /></a>


                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-lg-3 mb-4">

                                        <div class="row">
                                            <div class="col-md-12">
                                                <img src={Background} alt="wrapkit" class="img-fluid rounded-circle" style={{height:"60%",width:"90%","object-fit": "cover"}} />
                                            </div>
                                            <div class="col-md-12 text-center" style={{marginTop:"-59%"}}>
                                                <div class="pt-2">
                                                    <h5 class="mt-4 font-weight-medium mb-0">Bayan <br /> Hmaidy</h5>
                                                    <h6 class="subtitle mb-3">Electrical Engineer</h6>
                                                    <p>I am not exceptionally gifted neither am I especially bright. I think I’m only very curious</p>
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
            </div>
        )
    }
}

export default AboutUs
