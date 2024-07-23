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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SignIn = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const redirectPath = location.state?.path || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      navigate(redirectPath, { replace: true });
    } catch {
      setError("Failed to Sign In");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Card style={{ width: "300px" }}>
        <CardBody>
          <h1 className="text-center mb-4">Sign In</h1>
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
            <Button
              type="submit"
              variant="primary"
              className="w-100 mt-3 mb-2"
              disabled={loading}
            >
              Sign In
            </Button>
          </Form>
          <div className="text-center">
            <Link to={"/forgot-password"}>Forgot Password?</Link>
          </div>
        </CardBody>
      </Card>
      <div className="text-center mt-2">
        Need an account? <Link to={"/signup"}>Signup</Link>
      </div>
    </div>
  );
};

export default SignIn;
