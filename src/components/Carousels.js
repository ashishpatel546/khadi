// import logo from './logo.svg';
import React from 'react'
import { Carousel} from "react-bootstrap";

function Carousels() {
  return (
    <div>
    <div id="home"></div>

<Carousel className='carousel-home'>
   {/* src="https://images.pexels.com/photos/1008206/pexels-photo-1008206.jpeg" */}
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid c-img rounded-pill"
      src="https://images.pexels.com/photos/1389460/pexels-photo-1389460.jpeg"      
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>'Hand Spun, Hand Woven  - ethical, authentic, aesthetic'</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid c-img rounded-pill"   
      src="https://images.pexels.com/photos/1488467/pexels-photo-1488467.jpeg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>'Hand Spun, Hand Woven  - ethical, authentic, aesthetic'</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid c-img rounded-pill"
      src="https://images.pexels.com/photos/1266139/pexels-photo-1266139.jpeg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>'Hand Spun, Hand Woven  - ethical, authentic, aesthetic'</h3>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    
    </div>
  );
}

export default Carousels;
