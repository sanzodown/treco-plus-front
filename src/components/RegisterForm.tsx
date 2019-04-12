import React, {FormEventHandler, FunctionComponent, useCallback, useMemo, useState} from 'react'
import styled from 'styled-components'
import useInput from "@rooks/use-input";
import { useRegisterUserMutation} from "../graphql/components";
import AuthManager from "../services/AuthManager";

interface FormErrors {
  [key: string]: {
    message: string
  }
}

const RegisterFormInner = styled.div`
  
`

const RegisterForm: FunctionComponent = () => {
  const [errors, setErrors] = useState<FormErrors>({})
  const email = useInput('')
  const firstPassword = useInput('')
  const secondPassword = useInput('')
  const username = useInput('')
  const registerUserMutation = useRegisterUserMutation({
    variables: { input: { email: email.value, password: firstPassword.value, username: username.value } }
  })

  const onKeyUp = () => {
    if (firstPassword.value !== secondPassword.value) {
      setErrors({
        ...errors,
        password: {
          message: 'The two passwords must match'
        }
      })
    } else {
      const clone = {...errors}
      delete clone.password
      setErrors(clone)
    }
  }

  const hasErrors = useMemo(() => {
    return Object.keys(errors).length > 0
  }, [errors])

  const onSubmit: FormEventHandler = async e => {
    e.preventDefault()
    if (hasErrors) return;
    const response = await registerUserMutation()
    if (response.data && response.data.registerUser) {
      const {token, refreshToken} = response.data.registerUser
      AuthManager.login(token, refreshToken)
    }
  }
    return (
        <RegisterFormInner>
          <h2>Register</h2>
          <form onSubmit={onSubmit} onKeyUp={onKeyUp}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" className="form-control" placeholder="toto" {...username}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" className="form-control" placeholder="test@test.com" {...email}/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="firstPassword">Password</label>
              <input type="password" className="form-control" id="firstPassword" placeholder="Password" {...firstPassword}/>
            </div>
            <div className="form-group">
              <label htmlFor="secondPassword">Validate your password</label>
              <input type="password" className="form-control" id="secondPassword" placeholder="Password" {...secondPassword} />
            </div>
            {errors &&
              Object.keys(errors).map(field => <p key={field} className="text-danger">{errors[field].message}</p>)
            }
            <button type="submit" disabled={hasErrors} className="btn btn-primary">Submit</button>
          </form>
        </RegisterFormInner>
    )
}

export default RegisterForm
