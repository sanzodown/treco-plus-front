import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import LoginForm from "../components/LoginForm";
import AuthManager from "../services/AuthManager";
import {Redirect} from "@reach/router";

const LOGIN_WIDTH = 600
const LOGIN_HEIGHT = 330

const LoginContainer = styled.div`
  position: fixed;
  left: calc(50% - ${LOGIN_WIDTH / 2}px);
  top: calc(50% - ${LOGIN_HEIGHT / 2}px);
  & .card {
    width: ${LOGIN_WIDTH}px;
    height: ${LOGIN_HEIGHT}px;
  }
`

const Login: FunctionComponent = () => {
  if(AuthManager.isLoggedIn) {
    return <Redirect to="/" noThrow/>
  }
  return (
    <div className="container">
      <LoginContainer>
        <div className="card">
          <div className="card-body">
            <LoginForm/>
          </div>
        </div>
      </LoginContainer>
    </div>
  )
}

export default Login
