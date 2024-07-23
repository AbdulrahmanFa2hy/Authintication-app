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

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { currentUser, updateUserEmail, updateUserPassword } = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let promises = [];
    setLoading(true);
    setError("");

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("the password do not match");
    }
    if (currentUser.email !== emailRef.current.value) {
      promises.push(updateUserEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updateUserPassword(passwordRef.current.value));
    }
    Promise.all(promises)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setError("Failed to update user");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <Card style={{ width: "300px" }}>
        <CardBody>
          <h1 className="text-center mb-4">Update Profile</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormControl
                type="email"
                id="email"
                defaultValue={currentUser?.email}
                ref={emailRef}
                required
              />
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
              Update
            </Button>
          </Form>
        </CardBody>
      </Card>
      <div className="text-center mt-2">
        <Link to={"/"}>cancel</Link>
      </div>
    </div>
  );
};

export default UpdateProfile;
