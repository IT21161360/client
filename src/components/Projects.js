import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import NavLink from 'react-bootstrap/esm/NavLink';
import projectData from './data';

const Projects = () => {
  return (
    <>
      <div className='container'>

        <h2 className='text-center mt-2'>Projects</h2>

        <div className='row d-flex justify-content-around align-items-center'>

          {projectData.map((project) => (

            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={project.id}>

              <Card style={{ width: "100%" }}>

                <Card.Img variant="top" src="logo512.png" alt="Common Logo" />
                
                <Card.Img variant="top" src={project.imgsrc} alt={project.projectName} />
                <Card.Body>
                  <Card.Title>{project.projectName}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary" href={project.demo} target="_blank">
                    Go to demo
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;


