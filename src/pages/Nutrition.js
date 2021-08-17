import React, { Component } from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import Header from '../component/Header';
import Footer from '../component/Footer';
import '../styling/nutrition.css'
import Logo1 from '../assets/stethoscope.png'
import Logo2 from '../assets/pin.png'
import Logo3 from '../assets/telephone.png'

export class Nutrtrition extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1 style={{fontFamily: "'Style Script',cursive", textAlign: "center", fontSize: "50px", fontWeight: "bold", color: "rgba(39, 134, 44, 0.8)", marginTop: "40px"}} >Our Nutritionists</h1>
        <div className="container">
          <Card className="cardD"
            style={{
              width: '70%',
              height: '25rem',
              margin: '5%',
              marginLeft: '15%',
              marginTop: '30px',
              borderRadius: '10px',
              boxShadow: '5px 2px 5px 5px rgb(238, 234, 234)',
            }}
          >
            <Row>
              <Col>
                <Image className="imgD" src="https://cdn-dr-images.vezeeta.com/Assets/Images/SelfServiceDoctors/ENT319193/Profile/150/nutritionist-mohammad-attieh-dietitian-and-nutrition_20200510094337638.jpg" roundedCircle />
              </Col>
              <Col className="col2">
                <Card.Body>
                  <Card.Text>
                    <h4 className="nameD">Nutritionist Mohammad Attieh</h4>
                    <p className="titleD">Dietitian</p>
                    <Row>
                      <Col className="colD">
                        <img className="logoD" src={Logo1} alt="" />
                      </Col>
                      <Col>
                        <p className="details d1">Nutritionist Specialized in Adult Dietitian and Nutrition and Pediatric Dietitian and Nutrition</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="colD">
                        <img style={{ marginTop: '10%' }} className="logoD" src={Logo2} alt="" />
                      </Col>
                      <Col>
                        <p className="details d2">Gardens Street : alwaha circle</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="colD">
                        <img style={{ marginTop: '10%' }} className="logoD imgT" src={Logo3} alt="" />
                      </Col>
                      <Col>
                        <p className="details d3">06 500 1616</p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Col>

            </Row>
          </Card>
          <Card className="cardD"
            style={{
              width: '70%',
              height: '25rem',
              margin: '5%',
              marginLeft: '15%',
              marginTop: '30px',
              borderRadius: '10px',
              boxShadow: '5px 2px 5px 5px rgb(238, 234, 234)',
            }}
          >
            <Row>
              <Col>
                <Image className="imgD" src="https://cdn-dr-images.vezeeta.com/Assets/Images/SelfServiceDoctors/ENTdee56f/Profile/150/clinic-faten-marji-dietitian-and-nutrition_20201007164320202.jpg" roundedCircle />
              </Col>
              <Col className="col2">
                <Card.Body>
                  <Card.Text>
                    <h4 style={{ marginRight: '45%' }} className="nameD">Doctor Faten Marji</h4>
                    <p style={{ marginRight: '70%' }} className="titleD">Nutritionist</p>
                    <Row>
                      <Col className="colD">
                        <img className="logoD" src={Logo1} alt="" />
                      </Col>
                      <Col>
                        <p className="details d1">Nutritionist Specialized in Adult Dietitian and Nutrition</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="colD">
                        <img className="logoD" src={Logo2} alt="" />
                      </Col>
                      <Col>
                        <p style={{ marginRight: '45%' }} className="details d2">Khaldi Street : ibn khaldon</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="colD">
                        <img style={{ marginTop: '25%' }} className="logoD imgT" src={Logo3} alt="" />
                      </Col>
                      <Col>
                        <p className="details d3">06 500 1616</p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Col>

            </Row>
          </Card>
          <Card className="cardD"
            style={{
              width: '70%',
              height: '25rem',
              margin: '5%',
              marginLeft: '15%',
              marginTop: '30px',
              borderRadius: '10px',
              boxShadow: '5px 2px 5px 5px rgb(238, 234, 234)',
            }}
          >
            <Row>
              <Col>
                <Image className="imgD" src="https://cdn-dr-images.vezeeta.com/Assets/Images/SelfServiceDoctors/ENT65889d/Profile/150/doctor-dieaa-hindi-dietitian-and-nutrition_20180705020200343.jpg" roundedCircle />
              </Col>
              <Col className="col2">
                <Card.Body>
                  <Card.Text>
                    <h4 style={{ marginRight: '30%' }} className="nameD">Nutritionist Dieaa Hindi</h4>
                    <p style={{ marginRight: '75%' }} className="titleD">Dietitian</p>
                    <Row>
                      <Col className="colD">
                        <img className="logoD" src={Logo1} alt="" />
                      </Col>
                      <Col>
                        <p className="details d1">Nutritionist Specialized in Adult Dietitian and Nutrition and Pediatric Dietitian and Nutrition</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="colD">
                        <img style={{ marginTop: '10%' }} className="logoD" src={Logo2} alt="" />
                      </Col>
                      <Col>
                        <p style={{ marginRight: '45%' }} className="details d2">Tabarbour : tareq street </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="colD">
                        <img style={{ marginTop: '10%' }} className="logoD imgT" src={Logo3} alt="" />
                      </Col>
                      <Col>
                        <p className="details d3">06 500 1616</p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Col>

            </Row>
          </Card>
          <Card className="cardD"
            style={{
              width: '70%',
              height: '25rem',
              margin: '5%',
              marginLeft: '15%',
              marginTop: '30px',
              borderRadius: '10px',
              boxShadow: '5px 2px 5px 5px rgb(238, 234, 234)',
            }}
          >
            <Row>
              <Col>
                <Image className="imgD" src="https://cdn-dr-images.vezeeta.com/Assets/Images/SelfServiceDoctors/ENT2baed5/Profile/150/doctor-osoul-qaraqesh-dietitian-and-nutrition_20210505114209858.jpg" roundedCircle />
              </Col>
              <Col className="col2">
                <Card.Body>
                  <Card.Text>
                    <h4 style={{ marginRight: '35%' }} className="nameD">Doctor ragad aloqaile</h4>
                    <p style={{ marginRight: '70%' }} className="titleD">Nutritionist</p>
                    <Row>
                      <Col className="colD">
                        <img className="logoD" src={Logo1} alt="" />
                      </Col>
                      <Col>
                        <p className="details d1">Nutritionist Specialized in Adult Dietitian and Nutrition and Pediatric Dietitian and Nutrition</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="colD">
                        <img style={{ marginTop: '10%' }} className="logoD" src={Logo2} alt="" />
                      </Col>
                      <Col>
                        <p className="details d2">Wadi Al Sir : albayader</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="colD">
                        <img style={{ marginTop: '50%' }} className="logoD imgT" src={Logo3} alt="" />
                      </Col>
                      <Col>
                        <p className="details d3">06 500 1616</p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Col>

            </Row>
          </Card>
          <Card className="cardD"
            style={{
              width: '70%',
              height: '25rem',
              margin: '5%',
              marginLeft: '15%',
              marginTop: '30px',
              borderRadius: '10px',
              boxShadow: '5px 2px 5px 5px rgb(238, 234, 234)',
            }}
          >
            <Row>
              <Col>
                <Image className="imgD" src="https://cdn-dr-images.vezeeta.com/Assets/Images/SelfServiceDoctors/ENT50626f/Profile/150/nutritionist-mohammad-ashqar-dietitian-and-nutrition_20181120224523453.jpg" roundedCircle />
              </Col>
              <Col className="col2">
                <Card.Body>
                  <Card.Text>
                    <h4 style={{ marginRight: '10%' }} className="nameD">Nutritionist Mohammad Ashqar</h4>
                    <p style={{ marginRight: '70%' }} className="titleD">Nutritionist</p>
                    <Row>
                      <Col className="colD">
                        <img className="logoD" src={Logo1} alt="" />
                      </Col>
                      <Col>
                        <p className="details d1">Nutritionist Specialized in Adult Dietitian and Nutrition</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="colD">
                        <img className="logoD" src={Logo2} alt="" />
                      </Col>
                      <Col>
                        <p style={{ marginRight: '45%' }} className="details d2">Tla Al Ali : madina street</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="colD">
                        <img style={{ marginTop: '22%' }} className="logoD imgT" src={Logo3} alt="" />
                      </Col>
                      <Col>
                        <p className="details d3">06 500 1616</p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Col>

            </Row>
          </Card>
          <Card className="cardD"
            style={{
              width: '70%',
              height: '25rem',
              margin: '5%',
              marginLeft: '15%',
              marginTop: '30px',
              borderRadius: '10px',
              boxShadow: '5px 2px 5px 5px rgb(238, 234, 234)',
            }}
          >
            <Row>
              <Col>
                <Image className="imgD" src="https://cdn-dr-images.vezeeta.com/Assets/Images/SelfServiceDoctors/ENT3114f6/Profile/150/nutritionist-dima-kilani-dietitian-and-nutrition_20180910121754657.jpg" roundedCircle />
              </Col>
              <Col className="col2">
                <Card.Body>
                  <Card.Text>
                    <h4 style={{ marginRight: '30%' }} className="nameD">Nutritionist Dima Kilani</h4>
                    <p style={{ marginRight: '75%' }} className="titleD">Dietitian</p>
                    <Row>
                      <Col className="colD">
                        <img className="logoD" src={Logo1} alt="" />
                      </Col>
                      <Col>
                        <p className="details d1">Nutritionist Specialized in Adult Dietitian and Nutrition and Pediatric Dietitian and Nutrition</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="colD">
                        <img style={{ marginTop: '10%' }} className="logoD" src={Logo2} alt="" />
                      </Col>
                      <Col>
                        <p style={{ marginRight: '50%' }} className="details d2">Khilda : Amman</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="colD">
                        <img style={{ marginTop: '50%' }} className="logoD imgT" src={Logo3} alt="" />
                      </Col>
                      <Col>
                        <p className="details d3">06 500 1616</p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Col>

            </Row>
          </Card>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Nutrtrition
