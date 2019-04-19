import React, {FormEventHandler, FunctionComponent} from 'react'
import styled from 'styled-components'
import useInput from "@rooks/use-input";
import {useLoginUserMutation} from "../graphql/components";
import AuthManager from "../services/AuthManager";

const LoginFormInner = styled.div`

`

const LoginForm: FunctionComponent = () => {
  const email = useInput('')
  const password = useInput('')
  const loginUserMutation = useLoginUserMutation({
    variables: { input: { email: email.value, password: password.value } }
  })

  const onSubmit: FormEventHandler = async e => {
    e.preventDefault()
    const response = await loginUserMutation()
    if (response.data && response.data.loginUser) {
      const {token, refreshToken} = response.data.loginUser
      AuthManager.login(token, refreshToken)
    }
  }

  return (
    <LoginFormInner>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" className="form-control" placeholder="test@test.com" {...email}/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
            else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" {...password}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <a href="/register" className="btn btn-primary">Register</a>
      </form>
    </LoginFormInner>
  )
}

export default LoginForm
