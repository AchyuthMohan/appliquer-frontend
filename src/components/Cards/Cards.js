import React, { useEffect, useState } from 'react'
import './Cards.css'
import baseUrl from '../../utils/urls'
import axios from 'axios'
function Cards() {
  const[jobs,setJobs]=useState([])
  useEffect(()=>{
    axios.get(`${baseUrl}/jobs/`).then((response)=>{
      console.log(response.data)
      setJobs(response.data)
    },(error)=>{
      console.log(error)
    })
  },[])

const handleSubmit=(e)=>{
  console.log(e);
  
}


  return (
    <div class="container">
  <div class="card">
    <div class="card__header">
      <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600"/>
    </div>
    <div class="card__body">
      <span class="tag tag-blue">eda ivade job_name</span>
      <h4>ivade company_name</h4>
      <p>ivade job_desc</p>
      <ul>
        <li>ivade skills oronum ittamathi bullet points aayitu</li>
        <li>ithellam jobs array il indatto</li>
      </ul>
    </div>
    <div class="card__footer">
     <button>Apply</button>
    </div>
  </div>


  <div class="card">
    <div class="card__header">
      <img src="https://source.unsplash.com/600x400/?food" alt="card__image" class="card__image" width="600"/>
    </div>
    <div class="card__body">
      <span class="tag tag-brown">Food</span>
      <h4>Data Analyst</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
    </div>
    <div class="card__footer">
    <button>Apply</button>
    </div>
  </div>


  <div class="card">
    <div class="card__header">
      <img src="https://source.unsplash.com/600x400/?car,automobile" alt="card__image" class="card__image" width="600"/>
    </div>
    <div class="card__body">
      <span class="tag tag-red">Automobile</span>
      <h4>UX Designer</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
    </div>
    <div class="card__footer">
    <button onClick={(e)=>handleSubmit(e)} >Apply</button>
    </div>
  </div>
</div>
  )
}

export default Cards