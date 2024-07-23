import React, { useRef, useState } from "react";
import {
  Alert,
  Button,
  Card,
  CardBody,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SignUp = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("the password do not match");
    }
    try {
      setLoading(true);
      setError("");
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to create an account");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Card style={{ width: "300px" }}>
        <CardBody>
          <h1 className="text-center mb-4">Signup</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormControl type="email" id="email" ref={emailRef} required />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormControl
                type="password"
                id="password"
                ref={passwordRef}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="password-confirmation">
                Password Confirmation
              </FormLabel>
              <FormControl
                type="password"
                id="password-confirmation"
                ref={passwordConfirmationRef}
                required
              />
            </FormGroup>
            <Button
              variant="primary"
              type="submit"
              className="w-100 mt-3"
              disabled={loading}
            >
              SignUp
            </Button>
          </Form>
        </CardBody>
      </Card>
      <div className="text-center">
        Already have an account? <Link to={"/sign-in"}>Sign In</Link>
      </div>
    </div>
  );
};

export default SignUp;
