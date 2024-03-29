import React, { Component } from 'react';
import { Card, Row, Col, Carousel } from 'react-bootstrap';
import Laptop from '../component/laptop';


export class Home extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <div>
          <h2
            style={{
              marginLeft: '4%',
              marginTop: '20px',
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 'bold',
            }}
          >
            What is a Ketogenic"Keto" Diet?
          </h2>
          <Card
            style={{
              width: '90%',
              height: '20rem',
              margin: '5%',
              border: 'none',
              marginLeft: '4%',
              marginTop: '15px',
              backgroundColor:'whitesmoke'
            }}
          >
            <Row>
              <Col>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    <p
                      style={{
                        fontFamily: "'Style Script',cursive",
                        fontSize: '18px',
                        "line-height":'35px',
                        marginTop:"-30px",
                    
                      }}
                    >
                      The keto diet is a very low carb, high fat diet that
                      shares many similarities with the Atkins and low carb
                      diets. It involves drastically reducing carbohydrate
                      intake and replacing it with fat. This reduction in carbs
                      puts your body into a metabolic state called ketosis. When
                      this happens, your body becomes incredibly efficient at
                      burning fat for energy. It also turns fat into ketones in
                      the liver, which can supply energy for the brain.
                      Ketogenic diets can cause significant reductions in blood
                      sugar and insulin levels. This, along with the increased
                      ketones, has some health benefits.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Col>
              <Col>
                <Card.Img
                  style={{ height: '20rem' }}
                  variant='top'
                  src='https://i.dailymail.co.uk/1s/2020/08/03/14/31509694-0-image-a-17_1596462100363.jpg'
                />
              </Col>
            </Row>
          </Card>
          <Card
            style={{
              width: '90%',
              height: '40rem',
              margin: '5%',
              border: 'none',
              marginLeft: '4%',
              marginTop: '15px',
              backgroundColor:'whitesmoke'
            }}
          >
            <Row>
              <Col>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Img
                  style={{ height: '50rem' }}
                  variant='top'
                  src='https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                />
                </Card.Body>
              </Col>
              <Col>
              <Card.Text>
              <h2
            style={{
              marginLeft: '2%',
              marginTop: '50px',
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 'bold',
            }}
          >
            How to Follow the Ketogenic Diet
          </h2>
                    <p
                      style={{
                        fontFamily: "'Style Script',cursive",
                        fontSize: '18px',
                        "line-height":'55px',
                        marginTop:"-1px"

                      }}
                    >
                      There are several types of keto, but essentially,
                       to achieve a state of ketosis, you have to severely reduce the amount of carbs you eat.
                       (You can use a keto calculator to create a custom food plan.)
                        Data suggest the average American man age 20 or older consumes 46.4 percent of his daily calories from carbs, 
                        and the average American woman older than 20 consumes 48.2 percent of her daily calories from carbs.
                        right up arrow But in the classic ketogenic diet, which was originally used to manage seizure disorders,
                         80 to 90 percent of calories come from fat, 5 to 15 percent come from protein, and 5 to 10 percent come from carbohydrates.
                         Some of the aims of the latest version of the keto karma diet are weight loss, weight management, and improved athletic performance.
                    </p>
                  </Card.Text>
              </Col>
            </Row>
          </Card>
         
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      
        <div>
          <img
            style={{ float: 'right' }}
            class='splash__brocolli lazyloaded'
            src='//cdn.ruled.me/wp-content/themes/genesis-child/sections/homepage/img/brocolli.png'
            data-ll-status='loaded'
            alt=''
          />
        </div>
        <div
          style={{
            background:
              'whitesmoke url(//www.ruled.me/wp-content/themes/genesis-child/sections/homepage/img/divider.png) no-repeat scroll 0 0 / 100% 100%',
            height: '10rem',
            marginTop: '-15px',
            marginBottom: '40px',
          }}
        >
          <h1
            style={{
              textAlign: 'center',
              padding: '55px',
              marginLeft: '15%',
              fontFamily: "'Style Script', cursive",
              color: 'whitesmoke',
            }}
          >
            “Eat well as your body deserves it”
          </h1>
        </div>
        <div style={{ backgroundImage:"url('https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')" ,backgroundSize:"cover",width:"100%"}} className="laptop">
            <Laptop />
          </div>
        <div
          style={{
            marginLeft: '4%',
            marginRight: '4%',
            padding: '15px',
            marginTop: '100px',
          }}
        >
          <Row>
            <Col>
              <Card
                style={{
                  height: '28rem',
                  border: '1px solid rgb(39, 134, 44, 0.8)',
                }}
              >
                <Card.Img    style={{ height: '190px' }}
                  variant='top'
                  src='https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight: 'bold',
                    }}
                  >
                    Weight loss and maintain
                  </Card.Title>
                  <Card.Text
                    style={{
                      fontFamily: "'Style Script',cursive",
                      fontSize: '16px',
                    }}
                  >
                    Ability to achieve rapid weight loss Restricting
                    carbohydrates enough to be in a state of ketosis leads to
                    both a significant reduction in body fat and an increase or
                    retention of muscle mass.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  height: '28rem',
                  border: '1px solid rgb(39, 134, 44, 0.8)',
                }}
              >
                <Card.Img
                  style={{ height: '190px' }}
                  variant='top'
                  src='https://images.unsplash.com/photo-1479150928156-423a69d91fe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight: 'bold',
                    }}
                  >
                    Blood glucose control
                  </Card.Title>
                  <Card.Text
                    style={{
                      fontFamily: "'Style Script',cursive",
                      fontSize: '16px',
                    }}
                  >
                    Carbohydrate is the nutrient (macronutrient) that raises
                    blood sugar the most. Because ketogenic diets are very-low
                    in carbohydrate, they eliminate the larger rises in blood
                    sugar.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  height: '28rem',
                  border: '1px solid rgb(39, 134, 44, 0.8)',
                }}
              >
                <Card.Img
                  style={{ height: '190px' }}
                  variant='top'
                  src='https://res.cloudinary.com/grohealth/image/upload/f_auto,fl_lossy,q_auto/v1583749601/DCUK/Content/Diet-and-Cholesterol.png'
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight: 'bold',
                    }}
                  >
                    Blood pressure control
                  </Card.Title>
                  <Card.Text
                    style={{
                      fontFamily: "'Style Script',cursive",
                      fontSize: '16px',
                    }}
                  >
                    A range of health conditions are associated with high blood
                    pressure, such as heart disease, stroke and kidney disease.
                    It is also a feature of metabolic syndrome.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  height: '28rem',
                  border: '1px solid rgb(39, 134, 44, 0.8)',
                }}
              >
                <Card.Img
                  variant='top'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW-vfL5vEGmLBB-HSooY9dakPRQN1OJR73bdEJHk5dZkxKI0Z_O-iFiKH4ILin8j8iqvM&usqp=CAU'
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight: 'bold',
                    }}
                  >
                    Cholesterol levels
                  </Card.Title>
                  <Card.Text
                    style={{
                      fontFamily: "'Style Script',cursive",
                      fontSize: '16px',
                    }}
                  >
                    Overall, ketogenic diets usually result in improvements of
                    cholesterol levels. It is usual for LDL cholesterol levels
                    to go down and HDL cholesterol levels go up, which is
                    healthy.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <div
       
        >
          <h1
            style={{
              textAlign: 'center',
              padding: '55px',
              marginLeft: '4%',
              fontFamily: "'Style Script', cursive",
              color:"black",
            }}
          >
            Keto Diet Success Stories
          </h1>
        </div>
        <div>
          <Carousel
            style={{
              marginLeft: '13%',
              marginTop: '20px',
              marginBottom: '30px',
              width: '75%',
              height:'550px'
            }}
          >
            <Carousel.Item>
              <img
                style={{ height: '550px', width: '100px' }}
                className='d-block w-100'
                src='https://cdn.ruled.me/wp-content/uploads/2019/10/ElenaJuarez_SuccessBody.jpg'
                alt='Third slide'
              />

              <Carousel.Caption
                style={{
                  backgroundColor: 'rgba(255,255,255,0.5)',
                  marginTop: '20px',
                  color: 'black',
                }}
              >
                <h3>ELENA HAS LOST OVER 80 POUNDS ON KETO</h3>
                <p
                  style={{
                    fontFamily: "'Style Script',cursive",
                    fontSize: '16px',
                  }}
                >
                  Like so many others, I've started over so many more times than
                  I can count. I've tried everything under the sun to lose
                  weight and was successful the year before I got married
                  because I knew it was fast approaching. But I kept my diet
                  super low in carbs and hours and hours at the gym to get there
                  only to gain that weight back after I had my girls (within 3
                  years). After that, I would yo-yo diet. This time was
                  different, my 9-year-old received a letter from her school
                  saying she had to be ...
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: '550px', width: '100px' }}
                className='d-block w-100'
                src='https://cdn.ruled.me/wp-content/uploads/2019/10/StefanReich_SuccessBody1.jpg'
                alt='First slide'
              />
              <Carousel.Caption
                style={{
                  backgroundColor: 'rgba(255,255,255,0.5)',
                  marginTop: '20px',
                  color: 'black',
                }}
              >
                <h3>“KETO SAVED MY LIFE” – STEFAN, DOWN OVER 200 LBS</h3>
                <p
                  style={{
                    fontFamily: "'Style Script',cursive",
                    fontSize: '16px',
                  }}
                >
                  After nearly 4 years clean from drugs and alcohol, I had
                  switched addictions to food and put on around 200 lbs. In the
                  end, I weighed just north of 400 pounds and was facing
                  bariatric surgery, when I had this sort of breakthrough
                  epiphany (after a dark moment of suicidal depression, and a
                  few weeks later this chance encounter with a beautiful female
                  friend from high school) where I realized that I was in
                  control of my life; I was the one who got myself into this
                  situation, and therefore could be ...
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: '550px', width: '100px' }}
                className='d-block w-100'
                src='https://cdn.ruled.me/wp-content/uploads/2019/10/LesleePascal_SuccessBody.jpg'
                alt='Second slide'
              />

              <Carousel.Caption
                style={{
                  backgroundColor: 'rgba(255,255,255,0.5)',
                  marginTop: '20px',
                  color: 'black',
                }}
              >
                <h3>LESLEE HAS LOST OVER 80 POUNDS AT 60 YEARS OLD!</h3>
                <p
                  style={{
                    fontFamily: "'Style Script',cursive",
                    fontSize: '16px',
                  }}
                >
                  On February 1st, I will be exactly one year into my Keto way
                  of life. In that time, I have lost 83 lbs. although that is
                  something to celebrate by itself, I also accomplished other
                  things. I was a type 2 diabetic when I started this journey
                  and now have completely been able to give up my Metformin as
                  well as my twice daily insulin shots. I have also gone off my
                  blood pressure meds as well as my statins and antidepressant.
                  I have gone from absolutely no energy to days filled with
                  everything ...
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: '550px', width: '100px' }}
                className='d-block w-100'
                src='https://cdn.ruled.me/wp-content/uploads/2019/10/JasonYoungdell_SuccessFinal.jpg'
                alt='Third slide'
              />

              <Carousel.Caption
                style={{
                  backgroundColor: 'rgba(255,255,255,0.5)',
                  marginTop: '20px',
                  color: 'black',
                }}
              >
                <h3>JASON LOST 130 POUNDS AND NO LONGER HAS DIABETES</h3>
                <p
                  style={{
                    fontFamily: "'Style Script',cursive",
                    fontSize: '16px',
                  }}
                >
                  I weighed 390lbs and was diagnosed with type 2 diabetes. My
                  a1c was 11. I was put on 3 different meds and insulin shots. I
                  began keto and helping others with keto. I now weigh 260lbs,
                  no longer have diabetes and am off all medications. I read
                  everything I could find on keto on the internet, made it a
                  goal to read 1 keto-related article a week to increase my
                  understanding. I kept small goals - in the beginning, it was
                  to lose 5lbs a month, walk around the block without getting
                  winded when ...
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: '550px', width: '100px' }}
                className='d-block w-100'
                src='https://cdn.ruled.me/wp-content/uploads/2019/10/GillianBredenhann_SuccessFinal.jpg'
                alt='Third slide'
              />

              <Carousel.Caption
                style={{
                  backgroundColor: 'rgba(255,255,255,0.5)',
                  marginTop: '20px',
                  color: 'black',
                }}
              >
                <h3>GILLIAN LOST OVER 120 POUNDS USING KETO</h3>
                <p
                  style={{
                    fontFamily: "'Style Script',cursive",
                    fontSize: '16px',
                  }}
                >
                  My name is Gillian Bredenhann and I live in South Africa. I
                  have been obese for most of my life. Approximately 3 years
                  ago, I decided that I was tired of being unhappy. Tired of
                  watching everyone swim in the summer days, but I was obviously
                  self-conscious and not going to get into a bathing costume.
                  Tired of having to buy size 24 clothing. Just plain tired. I
                  weighed 118kg at my highest. Initially, I started by eating
                  low-fat meals, and really just cutting down on all the foods
                  that all of us ...
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Home;
