import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [
    createUserWithEmailAndPassword,
    
  ] = useCreateUserWithEmailAndPassword(auth);
  const handleEmail = (e) => {
    setEmail(e.target.value);
    // console.log(e.target.value)
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setPassword(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email,password,name)
    navigate('/')
  };
  const naviageLogIn = () => {
    navigate("/login");
  };
  return (
    <div>
      <h1 className="text-primary text-center m-4">Please Register</h1>
      <Form onSubmit={handleFormSubmit} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onBlur={handleName}
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmail}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePassword}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <p>
          Already have acc?{" "}
          <span
            className="text-danger"
            style={{ cursor: "pointer" }}
            onClick={naviageLogIn}
          >
            Please Log in
          </span>
        </p>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Registration;
