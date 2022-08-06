import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import axios from 'axios'
import baseUrl from '../../utils/urls'
const CarouselComponent = () => {
  const[carousels,setCarousel]=useState([])
  useEffect(()=>{
    axios.get(`${baseUrl}/trending/`).then((response)=>{
      setCarousel(response.data)
    },(error)=>{
      console.log(error)
    })
  },[])

  return (
    <div>
      <Carousel  interval = {2000} fade>

    {carousels.map((item)=>{
      return(
        <Carousel.Item >
        <img
          className="d-block w-100 "
          
          style={ {height:'90vh', backgroundColor:'black'}}
          src={item.image}
          alt="First slide"
        />
        <Carousel.Caption style = {{background:"rgba(0, 0, 0, 0.5)"}}>
          <h3>{item.company_name}<span/>,{item.job_name}</h3>
          <p>This is a safe and non-toxic social media platform, open to all regradless of their gender identity</p>
        </Carousel.Caption>
      </Carousel.Item>
      )
    })}
    


  </Carousel>
    </div>
  )
}

export default CarouselComponent