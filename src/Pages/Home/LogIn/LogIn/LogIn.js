import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate =useNavigate();
    const handleEmail =e=>{
        setEmail(e.target.value)
        // console.log(e.target.value)
    }
    const handlePassword =e=>{
        setPassword(e.target.value)
    }
    const handleFormSubmit =e=>{
        e.preventDefault();
    }
  return (
    <div>
      <h1 className="text-primary text-center">Please Log in</h1>
      <Form onSubmit={handleFormSubmit} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LogIn;
