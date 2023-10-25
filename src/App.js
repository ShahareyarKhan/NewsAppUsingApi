import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'
export default function App() {
  const pageSize = 9;
  const apikey =  process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  const setProgressBar = (progress) => {
    setProgress(progress);
  };
  const [mode, setmode] = useState('white')
  const handledarkmode = () => {
    
    if (mode === 'white') {
      setmode('black');
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white";
      }
    else {
      setmode('white');
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black";
    }
  }
  return (
    <div>
      <div>
        <Router>
          <Navbar handledarkmode={handledarkmode} mode={mode} abouttext="About" navbar="News" country="in" />
          <LoadingBar height={3} color='#f11946' progress={progress} />
          <Routes>
            <Route exact path="/newsapp" element={<News apikey={apikey} setProgress={setProgressBar} key="general" pageSize={pageSize} country="in" category="general" mode={mode}/>} />

            <Route exact path="/" element={<News apikey={apikey} setProgress={setProgressBar} key="general" pageSize={pageSize} country="in" category="general" mode={mode}/>} />
            
            <Route path="/business" element={<News apikey={apikey} setProgress={setProgressBar} key="business" pageSize={pageSize} country="in" category="business" mode={mode}/>} />
            <Route  path="/entertainment" element={<News apikey={apikey} setProgress={setProgressBar} key="entertainment" pageSize={pageSize} country="in" category="entertainment" mode={mode}/>} />
            <Route path="/general" element={<News apikey={apikey} setProgress={setProgressBar} key="general1" pageSize={pageSize} country="in" category="general" mode={mode}/>} />
            <Route  path="/health" element={<News apikey={apikey} setProgress={setProgressBar} key="health" pageSize={pageSize} country="in" category="health" mode={mode}/>} />
            <Route  path="/science" element={<News apikey={apikey} setProgress={setProgressBar} key="science" pageSize={pageSize} country="in" category="science" mode={mode}/>} />
            <Route  path="/sports" element={<News apikey={apikey} setProgress={setProgressBar} key="sports" pageSize={pageSize} country="in" category="sports" mode={mode}/>} />
            <Route path="/technology" element={<News apikey={apikey} setProgress={setProgressBar} key="technology" pageSize={pageSize} country="in" category="technology" mode={mode}/>} />
          </Routes>
        </Router>
  
      </div>
    </div>
  )
}

