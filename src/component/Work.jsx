import React from 'react'
import './Work.css';
import jio from '../assets/jio.png';


const Work = () => {
  return (
    <>
       <div className='big_container'>
       <h1 className='Title'>Work Experience</h1>
       <div className='container2'>
        <div className='left_col2'>
        <img className='image2' src={jio} alt='profile'></img>
        </div>
        <div className='right_col2'>
        <h2 className='wh2'>Jio Platforms Limited</h2>
        <h3 className='wh3'>May 27th - July 19th 2024, Navi Mumbai</h3>
        <p className='wp'>As an intern at Jio Platforms Ltd, I conducted exploratory data analysis on the Jio recharges dataset, created its API using FastAPI, and performed time series forecasting with ARIMA and SARIMAX models. Additionally, I completed a sentiment analysis project and developed a small language model using Google Gemini for automated blog writing. </p>
    </div>
    </div>
    </div>
    </>
  )
}

export default Work
