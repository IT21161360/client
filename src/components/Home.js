import React from 'react'
import './Home.css'
import Button from 'react-bootstrap/esm/Button'

const Home = () => {
  return (
    <>
    <div className='container home_container'>
    <div className='home_innerdiv'>
      <div className='left_div'>
        <h2>Welcome to <span style={{color:"#6c63ff"}}>Dewmi Silva</span></h2>
        <p style={{color:"#666",letterSpacing:".5px",marginTop:2}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div className='btn_div mt-4'>
          <Button variant="danger" style={{color:"#666",letterSpacing:"1px", border:"none", borderRadius:4, background:"#2f2d69", marginRight:24 ,marginTop:2}}>Projects</Button>
          <Button variant="danger" style={{color:"#666",letterSpacing:"1px", border:"none", borderRadius:4, background:"#2f2d69", marginRight:24 ,marginTop:2}}>Youtube</Button>
        </div>
      </div>
      <div className='right_div'>
      <img src="dewmi.jpg" alt=""/>
      </div>
    </div>
    </div>
    </>
  )
}

export default Home
