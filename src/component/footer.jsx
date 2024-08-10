import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './footer.css';

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fxlon89', 'template_uh8zlbf', form.current, {
        publicKey: 'PhDFAm-DkerXKWBZd',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
<div className='contact-footer'>
      <h1 className='h11'>Contact Me</h1>
      <div className='contact-content'>
        <div className='contact-left'>
          <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}>
              <label className='label'>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input className='download-button2' type="submit" value="Send" />
            </form>
          </div>
        </div>
        <div className='contact-right'>
          <div className='contact-info'>
            <p><strong>Phone:</strong> (+91) 9703580481</p>
            <p><strong>Email:</strong> anushka20403@gmail.com</p>
          </div>
        </div>
      </div>
    </div>

  );   
}

export default Footer
