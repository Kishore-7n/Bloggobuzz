import React from 'react'
import '../styles/Contact.css';
function Contact() {
  return (
    <div className='contact'>
      <h3>Follow Bloggobuzz in all Social Media</h3>
      <div className='contact-icons'>
        <i className='bx bxl-twitter'></i>
        <i className='bx bxl-facebook' ></i>
        <i className='bx bxl-instagram' ></i>
        <i className='bx bxl-linkedin' ></i>
        <i className='bx bxl-github' ></i>
      </div>
      <div className='contact-textarea'>
        <textarea  rows="8"  placeholder='Any comments...........'></textarea>
      </div>
      <div className='contact-btn'>
      <button type="button" class="btn btn-success">submit</button>
      </div>
      <div className='query'>
        For Any Queries,Mail us<br></br>
        BloggoBuzzofficial@gmail.com
      </div>
    </div>
  )
}
export default Contact
