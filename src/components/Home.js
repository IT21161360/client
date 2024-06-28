import React from 'react';
import './Home.css';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <div className='container home_container'>
      <div className='home_innerdiv'>
        <div className='left_div'>
          <h2>Welcome to <span style={{color:"#6c63ff"}}>Dewmi Silva</span></h2>
          <p className='description'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <div className='btn_div mt-4'>
            <Button variant='primary' className='custom-button'>Projects</Button>
            <Button variant='primary' className='custom-button'>YouTube</Button>
          </div>
        </div>
        <div className='right_div'>
          <img src="logo.svg" alt="Dewmi Silva Logo"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
