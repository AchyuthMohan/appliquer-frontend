//import { rgbToHex } from '@mui/material';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


export default function Caarousel() {
  return (
    <Carousel  interval = {2000} fade>
    <Carousel.Item >
      <img
        className="d-block w-100 "
        
        style={ {height:'90vh', backgroundColor:'black'}}
        src="https://i2.wp.com/www.outfrontmagazine.com/wp-content/uploads/2018/01/GCN2016_EmikoHall-379.jpg?fit=1000%2C667&ssl=1"
        alt="First slide"
      />
      <Carousel.Caption style = {{background:"rgba(0, 0, 0, 0.5)"}}>
        <h3>Open to all</h3>
        <p>This is a safe and non-toxic social media platform, open to all regradless of their gender identity</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item >
      <img
        className="d-block w-100"
        style={ {height:'90vh'} }
        src="https://blogs.flinders.edu.au/fit/wp-content/uploads/sites/19/2018/07/mental-health-3337026_1280.jpg"
        alt="Second slide"
      />
      <Carousel.Caption style = {{background:"rgba(0, 0, 0, 0.5)"}}>
        <h3>Have a sound mind</h3>
        <p>We are here to ensure that you are doing well mentally as well as emotionally</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.halldale.com/ext/resources/2020/11/metaverse_DMcreate.jpg?t=1605633406&width=1080"
        style={ {height:'90vh'} }
        alt="Third slide"
      />
      <Carousel.Caption style = {{background:"rgba(0, 0, 0, 0.5)"}}>
        <h3>The metaverse is coming!</h3>
        <p>Metaverse! is it just another buzzword or something revolutionary, follow us to know more </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}