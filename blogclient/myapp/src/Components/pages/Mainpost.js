import React from 'react';
import {  useLocation, } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/Mainpost.css';
const Mainpost = (props)=> {
  const location = useLocation();
  const D = location.state
  useEffect(()=>{
    if (D.Description!=null){
      document.getElementById('desc').innerHTML = D.Description.replace(/\n\n/g, "<br/>");
    }
  })
    
  useEffect(()=>{
    window.scrollTo(0,0);
})
  
  return (
    <div className='mainpost'>
        <div className='heading'>
            <h3>{D.title}</h3>
        </div>
        <h4> -by  {D.author}</h4>
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img alt='blogimage' src={D.image}></img>
            </div>
            <div className="flip-box-back">
              <h2>{D.snippet}<br></br>
              </h2>
            </div>
          </div>
        </div>
        <h5>{D.snippet}</h5>
        <p id='desc'> </p>
    </div>

  )
}

export default Mainpost
