import React from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link, json, useNavigate } from "react-router-dom";
import font from "../assets/font_login.png"
import "../styles/login.css"

const Login = () => {
  return (
    <>
      <section>
      <Container>
        <Row>
          <Col lg="9" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__form">
                <h2>Login</h2>

                <Form >
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                     
                      type="password"
                      placeholder="Password"
                      required
                      id="password"

                    />
                  </FormGroup>
                  <Button  className="btn  auth__btn" type="Button">
                    Sign In
                  </Button>
                </Form>
                <p>
                If you don't have an account, <Link to="/register">Sign Up</Link>
                </p>
              </div>
              <div className="login__img">
                <img src={font} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Login