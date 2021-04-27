import React from 'react'
import {Carousel, Card} from 'react-bootstrap'

// ## Every Post consists in the text content of 5 tweets (of the full thread) and 5 images wrapped in a Carousel. So depending on the length
// of the Thread, the final number of posts i will be displaying. It is usually between 15 and 20 tweets per Thread. So 3 or 4 Posts
export default function Post(props) {
    return(
        <Card className="card mb-5 mt-3" style={{ width: '90%'}}>
          <div className="row g-7">
            <div className="col-md-7">
              <Card.Body>
                <Card.Text>{props.cardText}</Card.Text>
              </Card.Body>
            </div>
            <div className="col-md-5">
              <Carousel fade  >
                <Carousel.Item className='carousel-item'>
                  <img
                    className="d-block carousel-image"
                    src={props.cardImage1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item className='carousel-item'> 
                  <img
                    className="d-block carousel-image"
                    src={props.cardImage2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                  <img
                    className="d-block carousel-image"
                    src={props.cardImage3}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                  <img 
                    className="d-block carousel-image"
                    src={props.cardImage4}
                    alt="Fourth slide"
                  />
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                  <img 
                    className="d-block carousel-image"
                    src={props.cardImage5}
                    alt="Fifth slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </Card>
          )
      }