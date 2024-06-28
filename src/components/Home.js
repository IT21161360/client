import React, { useState, useEffect } from 'react';
import './Home.css';
import './styles.css';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedTheme);
    document.body.classList.toggle('dark-mode', savedTheme);
    setIsLoading(false); // Set loading to false after initialization
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.body.classList.toggle('dark-mode', newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container text-center mt-4">
        <h1>Welcome to the Home Page</h1>
        <Button className="toggle-btn" onClick={toggleDarkMode}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </Button>
      </div>
      <div className='container home_container mt-4'>
        <div className='home_innerdiv row'>
          <div className='left_div col-md-6'>
            <h2>Welcome to <span style={{color:"#6c63ff"}}>Dewmi Silva</span></h2>
            <p className='description'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className='btn_div mt-4'>
              <Button variant='primary' className='custom-button'>Projects</Button>
              <Button variant='primary' className='custom-button'>YouTube</Button>
            </div>
          </div>
          <div className='right_div col-md-6'>
            <img src="dewmi.png" alt="Dewmi Silva Logo" className="img-fluid"/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
