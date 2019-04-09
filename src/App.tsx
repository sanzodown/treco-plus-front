import React, {FunctionComponent} from "react"
import styled from "styled-components"
import {useViewerQuery} from "./graphql/components";
import Route from "./components/Route";
import Home from "./views/Home";
import About from "./views/About";
import {Link, LinkGetProps, Redirect, Router} from "@reach/router";
import Teams from "./views/Teams";
import Login from "./views/Login";
import AuthManager from "./services/AuthManager";
import ProtectedRoute from "./components/ProtectedRoute";

const AppInner = styled.div`
  
`

const App: FunctionComponent = () => {
  const {data, error, loading} = useViewerQuery()
  console.log(data, error)

  return (
    <AppInner>
      <Router>
        <Route component={Login} path="/login"/>
        <ProtectedRoute component={Home} path="/"/>
        <ProtectedRoute component={Teams} path="/teams"/>
        <Route component={About} path="/about"/>
        <Redirect from="*" to="/" noThrow/>
      </Router>
    </AppInner>
  );
}

export default App
