// App.js

import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Heroo from './component/Heroo';
import Work from './component/Work';
import NeatGradientComponent from './component/neat';
import Footer from './component/footer';
import Education from './component/education';
import Projects from './component/projects';
import Skills from './component/skills';

function App() {
    return (
        <div style={{ position: 'relative', minHeight: '100vh', overflow: 'auto' }}>
            <NeatGradientComponent />
            <div className='App' style={{ position: 'relative', zIndex: 1 }}>
                <Navbar />
                <Heroo />
                <Skills />
                <Work />
                <Projects />
                <Education />
                <Footer />
             
            </div>
        </div>
    );
}

export default App;


