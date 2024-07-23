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
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ForgotPassword = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();

  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
    } catch {
      setError("Failed to send the reset password");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Card style={{ width: "300px" }}>
        <h2 className="text-center">Forgot Password</h2>
        {error && <Alert>{error}</Alert>}
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormControl type="email" id="email" ref={emailRef} required />
            </FormGroup>
            <Button
              type="submit"
              variant="primary"
              className="w-100 mt-3"
              disabled={loading}
            >
              Reset
            </Button>
          </Form>
        </CardBody>
      </Card>
      <div className="text-center mt-2">
        Already have an account? <Link to={"/sign-in"}>Sign In</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
