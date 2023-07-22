import React from 'react'
import '../styles/Bg.css';
import { useEffect } from 'react'
import video from '../vid/vidf.mp4';
import { Link } from 'react-router-dom'
export default function Bg() {
    useEffect(()=>{
        window.scrollTo(0,0);
    })
  return (
    <>
    <section>
    <div className='land' >
        <video src={video} autoPlay  loop muted  className='bg-video'>
        </video>
        <div className='bg-overlay'></div>
        <div className="home-text">
            <h1>Publish your passions, your way</h1>
            <h2>Create a unique and beautiful blog easily.</h2>
            <button className='blogbtn'><Link className='linkkk' to='/newblog'>Create Blog</Link></button>
        </div>

    </div>
    </section>
    <section className="sec2">
        {/* <div className='land2'> */}
            <video src={video} autoPlay  loop muted  className='bg-video2'>
            </video>
            <h1>Choose the perfect design</h1>
            <h2>Create a beautiful blog that fits your style.<br></br> 
                Choose from a selection of easy-to-use templates <br>
                </br>– all with flexible layouts and hundreds of<br></br>
                background images – or design something new.
            </h2>
    </section>
    <section className="sec3">
        <div>
            <h1>Hang onto your memories</h1>
            <h2>Save the moments that matter. <br></br>Blogger lets you safely store thousands of<br></br> posts, photos, and more with Google.
            </h2>
        </div>
    </section>
    </>
  )
}
