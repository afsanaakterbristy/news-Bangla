import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle,FaGithub, FaFacebook, FaWhatsapp,  FaTwitter } from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../assets/brands/football1 -.jpg'
import Brand2 from '../../assets/brands/picture1.PNG'
import { AuthContext } from '../../contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {
  const { providerLogin } = useContext(AuthContext)
  const googleProvider=new GoogleAuthProvider()
  const handleGoogleSingIn = () => {
    providerLogin(googleProvider)
      .then(result=> {
        const user = result.user;
        console.log(user);
      })
    .catch(error=>console.error(error))
  }
    return (
        <div>
            <ButtonGroup vertical> 
                  <Button onClick={handleGoogleSingIn} className='mb-2'   variant="outline-primary"><FaGoogle></FaGoogle> Login with google</Button>
                  <Button variant="outline-secondary"><FaGithub></FaGithub> Login with github</Button>
            </ButtonGroup> 
            <div>
                <h2>Find Us On</h2>
                 <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook/>FaceBook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp/>WhatApps</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>< FaTwitter/>Twitter</ListGroup.Item>
                   
                </ListGroup>
            </div>
            <div>
                 <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Brand1}
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Brand2}
          alt="Second slide"
        />     
      </Carousel.Item>
    
    </Carousel>
            </div>
        </div>
    );
};

export default RightSideNav;