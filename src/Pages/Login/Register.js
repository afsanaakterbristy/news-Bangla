import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthProvider';



const Register = () => {
    const { createUser,updateUserProfile,verifyEmail }=useContext(AuthContext)
 const [accepted,setAccepted]=useState(false)
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
      
        createUser(email, password)
            .then(result => {
              const user = result.user;
              console.log(user);
              form.reset()
              handleUpdateUserProfile(name, photoURL);
              handleverifyEmail();
              toast.success('Please verify your email address')
              
            })
        .catch(e=>console.error(e))
  }

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL:photoURL
    }
    updateUserProfile(profile)
      .then(() => { })
      .catch(e=>console.error(e))
  }

  const handleverifyEmail = () => {
    verifyEmail()
     .then(() => {})
     .catch(e=>console.error(e))
  }
  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter Name" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo url</Form.Label>
        <Form.Control type="text" name='photoURL' placeholder="Photo url" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email'placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password'  placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       
        </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox"
            onClick={handleAccepted}  label={<>
            Accept <Link to='/tramsandconditions'> terms and conditions</Link>
            </>} />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
       Register
      </Button>
            </Form> 
        <Form.Text className="text-danger">
   
       </Form.Text> 
        </div>
    );
};

export default Register;