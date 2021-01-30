import React from 'react';
import './core/assets/styles/custom.scss';
import Navbar from './core/assets/components/Navbar';
import About from './pages/home';
import Education from './pages/education';

const App = () =>  {
  return (
   <>
    <Navbar />
    <About />
    <Education />
   </>
  )
}

export default App;
