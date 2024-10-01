import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import SignIn from "../SignIn";
import Register from "../Register";
import "./Main.css"; // Make sure to create and import this CSS file

const Main = () => {
  const [key, setKey] = useState("signin");

  const handleTabChange = (tabKey) => {
    setKey(tabKey);
  };

  return (
    <>
      <Container className="pt-5">
        <Row className="mb-3 justify-content-center row">
        
          <Col xs={12} md={6} xl={3} lg={5} className="pt-5 text-black p-0">
            <div className="button-container">
              <Button
                onClick={() => handleTabChange("signin")}
                className={`custom-button ${key === "signin" ? "active-login bg-success" : "inactive-login"}`}
              >
                LOGIN
              </Button>
            </div>
          </Col>
          <Col  xs={12} md={6} xl={3} lg={5} className="pt-5 text-black p-0">
            <div className="button-container">
              <Button
                onClick={() => handleTabChange("register")}
                className={`custom-button ${key === "register" ? "active-signup bg-success" : "inactive-signup"}`}
              >
                SIGNUP
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      {key === "signin" && <SignIn setActiveKey={handleTabChange} />}
      {key === "register" && <Register setActiveKey={handleTabChange} />}
    </>
  );
};

export default Main;
