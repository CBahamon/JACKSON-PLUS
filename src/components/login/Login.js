import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../css/login.css";
import logo from '../img/logo3blanco.png';

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <div className="Login">
        <div className="item-login">
          <div className='logo'>
            <img src={logo} alt='logo' id='logo' />
            <h1>JACKSON +</h1>
          </div>
            <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            
            <button class="glow-on-hover" type="button" >LOGIN</button>
        </Form>
        </div>
      </div>
    </>
  )
}

export default Login
