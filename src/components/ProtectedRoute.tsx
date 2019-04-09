import React, {FunctionComponent} from 'react'
import {Redirect, RouteComponentProps} from '@reach/router'
import AuthManager from "../services/AuthManager";

type Props = { component: FunctionComponent, redirectPath?: string } & RouteComponentProps

const ProtectedRoute: FunctionComponent<Props> = ({component: Component, redirectPath, ...rest}) => {
  if (!AuthManager.isLoggedIn) {
    return <Redirect to={redirectPath!} noThrow/>
  }
  return (
    <Component {...rest} />
  )
}

ProtectedRoute.defaultProps = {
  redirectPath: '/login'
}

export default ProtectedRoute;
