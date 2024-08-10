import React from 'react';
import './Heroo.css';
import profile from '../assets/profile.jpg';
import resume from '../assets/anushka_resume.pdf';

const Heroo = () => {

  return (
    <div className='container'>
      <div className='left_col'>
        <h1 className='hi'>Hi, I'm Anushka Mohan.</h1>
        <p className='para'>
        I'm a 4th-year student at Manipal University Jaipur, diving deep into the world of web development and AI/ML. Always on the lookout for new challenges, I thrive on learning cutting-edge tech and connecting with like-minded innovators. When I’m not coding or exploring AI, you'll find me lost in a good novel. Let's build something amazing together!
        </p>
        <a className='link' href={resume} download>
          <button className="download-button1">Resume</button>
        </a>
      </div>
      <div className='right_col'>
        <img className='image' src={profile} alt='profile' />
      </div>
    </div>
  );
};

export default Heroo;