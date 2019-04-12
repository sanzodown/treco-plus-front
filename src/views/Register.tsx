import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import RegisterForm from "../components/RegisterForm";
import AuthManager from "../services/AuthManager";
import {Redirect} from "@reach/router";

const REGISTER_WIDTH = 600
const REGISTER_HEIGHT = 550

const RegisterContainer = styled.div`
  position: fixed;
  left: calc(50% - ${REGISTER_WIDTH / 2}px);
  top: calc(50% - ${REGISTER_HEIGHT / 2}px);
  & .card {
    width: ${REGISTER_WIDTH}px;
    height: ${REGISTER_HEIGHT}px;
  }
`

const Register: FunctionComponent = () => {
  if(AuthManager.isLoggedIn) {
    return <Redirect to="/" noThrow/>
  }
  return (
    <div className="container">
      <RegisterContainer>
        <div className="card">
          <div className="card-body">
            <RegisterForm/>
          </div>
        </div>
      </RegisterContainer>
    </div>
  )
}

export default Register
