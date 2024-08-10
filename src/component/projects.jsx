import React from 'react'
import senti from '../assets/senti2.png';
import ursula from '../assets/ursula.png'
import './projects.css';

const Projects = () => {
  return (
    <>
    <h1 className='hh'>Projects</h1>
    <div className='project'>
        <div className='pro1'>
            <img className='proimg1' src={senti} alt='website img'/>
            <h3 className='ph3'>Movie Reviews Sentiment Analysis</h3>
            <p className='pp1'>Made an app to identify whether a movie review is positive or negative using Flask. Performed EDA on IMDB reviews dataset(25,000 reviews) to identify trends. Applied Count Vectorizer, TF-IDF, and prediction algorithms like logistic regression and random forest. Enhanced accuracy to 89.34% through hyperparameter tuning.</p>
            <a href="https://github.com/anushka20403/Sentiment-Analysis-on-Movie-Reviews"><button className="download-button">View</button></a>
        </div>
        <div className='pro2'>
        <img className='proimg2' src={ursula} alt='website img'/>
            <h3 className='ph3'>Ursula: E-commerce Website</h3>
            <p className='pp1'>Developed a robust website with Express and MongoDB, leveraging EJS for dynamic rendering. Implemented secure user authentication, complete with login, logout, and session management. Designed an intuitive add-to-cart feature and an admin panel for efficient product management.</p>
            <a href="https://github.com/anushka20403/Ursula---E-commerce-Website"><button className="download-button">View</button></a>
        </div>
        </div>
        </>
      
  )
}

export default Projects