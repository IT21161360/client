import React from 'react'
import './About.css'
import {useState,useEffect} from 'react'
import './styles.css'
import Button from 'react-bootstrap/Button'

const About = () => {

  const [darkMode , setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedTheme);
    document.body.classList.toggle('dark-mode',savedTheme);
  },[]);


  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.body.classList.toggle('dark-mode', newDarkMode);
    localStorage.getItem('darkMode',newDarkMode);
  }

  return (
    <>
      <div>

      <div className="container text-center mt-4">
        <h1>Welcome to the About Page</h1>
        <Button className="toggle-btn" onClick={toggleDarkMode}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </Button>
      </div>


      <div className='container mb3 about_container'  style={{minHeight:"100%"}}>
      <div className='container main_container d-flex justify-content-around flex-wrap'>
      <div className='left-container mt-5' style={{width:500,marginTop:"95px",marginLeft: "20px auto"}}>
      <h2>Meet Dewmi Silva</h2>
      <p style={{color:"#666",letterSpacing:".5px",marginTop:2,lineHeight:2}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div className='right_container mt-3' style={{marginTop:"95px"}}>
        <img src="dewmi.png" alt="Dewmi's Image"/>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default About;
