import React, { FunctionComponent, Suspense } from "react";
import styled from "styled-components";
import Route from "./components/Route";
import Home from "./views/Home";
import { Redirect, Router } from "@reach/router";
import Teams from "./views/Teams";
import Login from "./views/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import useViewer from "./hooks/useViewer";
import Register from "./views/Register";
import Team from "./views/Team";
import Board from "./views/Board";

const AppInner = styled.div`
  h1 {
    text-align: center;
    margin-top: 25px;
  }
  .card {
    padding: 8px;
    margin: 10px;
  }
  .btn-primary {
    margin-right: 10px;
  }
`;

const App: FunctionComponent = () => {
  const viewer = useViewer();

  return (
    <AppInner>
      <Suspense fallback={<div>Loading ...</div>}>
        <Router>
          <Route component={Login} path="/login" />
          <Route component={Register} path="/register" />
          <ProtectedRoute component={Home} path="/" />
          <ProtectedRoute component={Teams} path="/teams" />
          <ProtectedRoute component={Team} path="/team/:teamId" />
          <ProtectedRoute
            component={Board}
            path="/team/:teamId/board/:boardId"
          />
          <Redirect from="*" to="/" noThrow />
        </Router>
      </Suspense>
    </AppInner>
  );
};

export default App;
