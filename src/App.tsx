import React, {FunctionComponent} from "react"
import styled from "styled-components"
import {useViewerQuery} from "./graphql/components";
import Route from "./components/Route";
import Home from "./views/Home";
import About from "./views/About";
import {Redirect, Router} from "@reach/router";
import Teams from "./views/Teams";
import Login from "./views/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import useViewer from "./hooks/useViewer";
import Register from "./views/Register";
import Boards from "./views/Boards";

const AppInner = styled.div`
  
`

const App: FunctionComponent = () => {
  const viewer = useViewer()

  return (
    <AppInner>
      <Router>
        <Route component={Login} path="/login"/>
        <Route component={Register} path="/register"/>
        <ProtectedRoute component={Home} path="/"/>
        <ProtectedRoute component={Teams} path="/teams"/>
        <ProtectedRoute component={Boards} path="/team/:teamId/boards"/>
        <Route component={About} path="/about"/>
        <Redirect from="*" to="/" noThrow/>
      </Router>
    </AppInner>
  );
}

export default App
