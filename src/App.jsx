import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './routesUtils.jsx';


function App() {
  return (
    <>
      <Router>
        <RoutesComponent/>
      </Router>
    </>
  )
}

export default App
