import React, { useRef, useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaMusic } from 'react-icons/fa';
import './Navbar.css';
import music from '../assets/music.mp3';

const Navbar = () => {
  const audioRef = useRef(null);
  const [audioReady, setAudioReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Check if audioRef.current exists to determine if audio is ready
    setAudioReady(!!audioRef.current);
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error('Failed to play audio:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className='navbar'>
      <div className='left'>
        <h1>AM</h1>
      </div>
      <div className='right'>
        {audioReady && <FaMusic className='icon' onClick={toggleAudio} />}
        <a className='link' href='https://github.com/anushka20403'><FaGithub className='icon' /></a>
        <a className='link' href='https://www.linkedin.com/in/anushka-mohan-0180a7279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><FaLinkedin className='icon' /></a>
      </div>
      {/* Hidden audio element for autoplay */}
      <audio ref={audioRef} preload="auto" loop>
        <source src={music} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Navbar;
