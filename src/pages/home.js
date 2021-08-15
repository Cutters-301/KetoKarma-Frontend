import React, { Component } from 'react';
import { Card, Button, Row, Col, Carousel } from 'react-bootstrap';
// import {
//     MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBRow, MDBCol, MDBCard, MDBCardImage,
//     MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn
// } from "mdbreact";


export class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2 style={{ marginLeft: "4%", marginTop: "20px", fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}>What is a Ketogenic"Keto" Diet?</h2>
                    <Card style={{ width: "90%", height: "20rem", margin: "5%", border: "none", marginLeft: "4%", marginTop: "15px" }} >
                        <Row>
                            <Col>
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text>
                                        <p style={{ fontFamily: "'Style Script',cursive", fontSize: "18px" }}> The ketogenic diet is a very low carb, high fat diet that shares many similarities with the Atkins and low carb diets.

                                            It involves drastically reducing carbohydrate intake and replacing it with fat. This reduction in carbs puts your body into a metabolic state called ketosis.
                                            When this happens, your body becomes incredibly efficient at burning fat for energy. It also turns fat into ketones in the liver, which can supply energy for the brain.

                                            Ketogenic diets can cause significant reductions in blood sugar and insulin levels. This, along with the increased ketones, has some health benefits.
                                        </p>
                                    </Card.Text>
                                    <Button style={{ height: "2.5rem", marginLeft: "10px", backgroundColor: "rgb(39, 134, 44, 0.8)", border: "none", fontFamily: "'Style Script',cursive" }} variant="primary">Learn More ...</Button>
                                </Card.Body>
                            </Col>
                            <Col>
                                <Card.Img style={{ height: "20rem" }} variant="top" src="https://i.dailymail.co.uk/1s/2020/08/03/14/31509694-0-image-a-17_1596462100363.jpg" />
                            </Col>
                        </Row>
                    </Card>
                </div>
                <div>
                    <img style={{ float: 'right' }} class="splash__brocolli lazyloaded" src="//cdn.ruled.me/wp-content/themes/genesis-child/sections/homepage/img/brocolli.png" data-ll-status="loaded" />
                </div>
                <div style={{ background: "#ffffff url(//www.ruled.me/wp-content/themes/genesis-child/sections/homepage/img/divider.png) no-repeat scroll 0 0 / 100% 100%", height: "10rem", marginTop: "-15px", marginBottom: "40px" }}>
                    <h1 style={{ textAlign: "center", padding: "55px", marginLeft: "15%", fontFamily: "'Style Script', cursive", color: "whitesmoke" }}>“Eat well as your body deserves it”</h1>
                </div>
                <div>
                    <h2 style={{ marginLeft: "4%", marginTop: "20px", fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}>Keto Benefits</h2>
                    <div style={{ marginLeft: "4%", marginRight: "4%", padding: "15px" }}>
                        <Row>
                            <Col>
                                <Card style={{ height: "28rem", border: "1px solid rgb(39, 134, 44, 0.8)" }}>
                                    <Card.Img variant="top" src="https://pixabay.com/get/gebc34b53769d8244aa9fc792bb937d25644644f22b86c071561be0eac99c1844fb62077f79176d9ff184f5f4ce43575d_1280.jpg" />
                                    <Card.Body>
                                        <Card.Title style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}>Weight loss and maintenance</Card.Title>
                                        <Card.Text style={{ fontFamily: "'Style Script',cursive", fontSize: "16px" }}>
                                            Ability to achieve rapid weight loss Restricting carbohydrates enough to be in a state of ketosis leads to both a significant reduction in body fat and an increase or retention of muscle mass.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ height: "28rem", border: "1px solid rgb(39, 134, 44, 0.8)" }}>
                                    <Card.Img style={{ height: "190px" }} variant="top" src="https://images.lifealth.com/uploads/2017/11/Diabetes.jpg" />
                                    <Card.Body>
                                        <Card.Title style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}>Blood glucose control</Card.Title>
                                        <Card.Text style={{ fontFamily: "'Style Script',cursive", fontSize: "16px" }}>
                                            Carbohydrate is the nutrient (macronutrient) that raises blood sugar the most. Because ketogenic diets are very-low in carbohydrate, they eliminate the larger rises in blood sugar.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ height: "28rem", border: "1px solid rgb(39, 134, 44, 0.8)" }}>
                                    <Card.Img style={{ height: "190px" }} variant="top" src="https://293761-902116-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/07/Foods-that-lower-bP-smaller-image_shutterstock_779596747-1024x768.jpg" />
                                    <Card.Body>
                                        <Card.Title style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}>High blood pressure control</Card.Title>
                                        <Card.Text style={{ fontFamily: "'Style Script',cursive", fontSize: "16px" }}>
                                            A range of health conditions are associated with high blood pressure, such as heart disease, stroke and kidney disease. It is also a feature of metabolic syndrome.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ height: "28rem", border: "1px solid rgb(39, 134, 44, 0.8)" }}>
                                    <Card.Img variant="top" src="https://static.parade.com/wp-content/uploads/2021/02/foods-that-lower-cholesterol.jpg" />
                                    <Card.Body>
                                        <Card.Title style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}>Cholesterol levels</Card.Title>
                                        <Card.Text style={{ fontFamily: "'Style Script',cursive", fontSize: "16px" }}>
                                            Overall, ketogenic diets usually result in improvements of cholesterol levels. It is usual for LDL cholesterol levels to go down and HDL cholesterol levels go up, which is healthy.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div>
                    {/* <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
                        <MDBCarouselInner>
                            <MDBRow>
                                <MDBCarouselItem itemId="1">
                                    <MDBCol md="4">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                                            <MDBCardBody>
                                                <MDBCardTitle>MDBCard title</MDBCardTitle>
                                                <MDBCardText>
                                                    Some quick example text to build on the card title and
                                                    make up the bulk of the card's content.
                                                </MDBCardText>
                                                <MDBBtn color="primary">MDBBtn</MDBBtn>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                    <MDBCol md="4">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                                            <MDBCardBody>
                                                <MDBCardTitle>MDBCard title</MDBCardTitle>
                                                <MDBCardText>
                                                    Some quick example text to build on the card title and
                                                    make up the bulk of the card's content.
                                                </MDBCardText>
                                                <MDBBtn color="primary">MDBBtn</MDBBtn>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                    <MDBCol md="4">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                                            <MDBCardBody>
                                                <MDBCardTitle>MDBCard title</MDBCardTitle>
                                                <MDBCardText>
                                                    Some quick example text to build on the card title and
                                                    make up the bulk of the card's content.
                                                </MDBCardText>
                                                <MDBBtn color="primary">MDBBtn</MDBBtn>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBCarouselItem>
                                <MDBCarouselItem itemId="2">
                                    <MDBCol md="4">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg" />
                                            <MDBCardBody>
                                                <MDBCardTitle>MDBCard title</MDBCardTitle>
                                                <MDBCardText>
                                                    Some quick example text to build on the card title and
                                                    make up the bulk of the card's content.
                                                </MDBCardText>
                                                <MDBBtn color="primary">MDBBtn</MDBBtn>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                    <MDBCol md="4">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg" />
                                            <MDBCardBody>
                                                <MDBCardTitle>MDBCard title</MDBCardTitle>
                                                <MDBCardText>
                                                    Some quick example text to build on the card title and
                                                    make up the bulk of the card's content.
                                                </MDBCardText>
                                                <MDBBtn color="primary">MDBBtn</MDBBtn>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                    <MDBCol md="4">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" />
                                            <MDBCardBody>
                                                <MDBCardTitle>MDBCard title</MDBCardTitle>
                                                <MDBCardText>
                                                    Some quick example text to build on the card title and
                                                    make up the bulk of the card's content.
                                                </MDBCardText>
                                                <MDBBtn color="primary">MDBBtn</MDBBtn>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBCarouselItem>
                                <MDBCarouselItem itemId="3">
                                    <MDBCol md="4">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg" />
                                            <MDBCardBody>
                                                <MDBCardTitle>MDBCard title</MDBCardTitle>
                                                <MDBCardText>
                                                    Some quick example text to build on the card title and
                                                    make up the bulk of the card's content.
                                                </MDBCardText>
                                                <MDBBtn color="primary">MDBBtn</MDBBtn>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                    <MDBCol md="4">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" />
                                            <MDBCardBody>
                                                <MDBCardTitle>MDBCard title</MDBCardTitle>
                                                <MDBCardText>
                                                    Some quick example text to build on the card title and
                                                    make up the bulk of the card's content.
                                                </MDBCardText>
                                                <MDBBtn color="primary">MDBBtn</MDBBtn>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                    <MDBCol md="4">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />
                                            <MDBCardBody>
                                                <MDBCardTitle>MDBCard title</MDBCardTitle>
                                                <MDBCardText>
                                                    Some quick example text to build on the card title and
                                                    make up the bulk of the card's content.
                                                </MDBCardText>
                                                <MDBBtn color="primary">MDBBtn</MDBBtn>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBCarouselItem>
                            </MDBRow>
                        </MDBCarouselInner>
                    </MDBCarousel> */}
                     <h2 style={{ marginLeft: "4%", marginTop: "20px", fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}>Success Stories</h2>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=First slide&bg=373940"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Second slide&bg=282c34"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Third slide&bg=20232a"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default Home;
