import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';


const Login = () => {
  const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/';
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
       console.log(email,password);
        signIn(email, password)
            .then(result => {
              const user = result.user;
              //setError('')
              form.reset()
              if (user.emailVerified) {
                navigate(from,{replace:true});
              } else {
                toast.error('your email is not verified')
              }
              console.log(user)
            })
          .catch(e => {
            console.error(e);
            setError(error.message)
          })
          .finally(() => {
         setLoading(false)
        })
    }
    return (
        <div>
            <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       
        </Form.Group>
          
      <Button variant="primary" type="submit">
        Login
      </Button>
            </Form> 
        <Form.Text className="text-danger">
      {error}
       </Form.Text>
        </div>
    );
};

export default Login;