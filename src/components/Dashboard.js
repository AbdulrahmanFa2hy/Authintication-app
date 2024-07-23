import React from "react";
import { Card, CardBody } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  console.log(currentUser.email);

  const hanldeLogout = () => {
    logout();
  };

  return (
    <div className={"text-center"}>
      <Card style={{ width: "300px" }}>
        <CardBody>
          <h1 className="text-center mb-4">Profile</h1>
          <strong>Email:</strong> {currentUser.email}
          <Link to={"/update-profile"} className={"btn btn-primary w-100 mt-3"}>
            Update Profile
          </Link>
        </CardBody>
      </Card>
      <Link
        to={"/sign-in"}
        className={"btn btn-primary mt-3"}
        onClick={hanldeLogout}
      >
        Log out
      </Link>
    </div>
  );
};

export default Dashboard;
