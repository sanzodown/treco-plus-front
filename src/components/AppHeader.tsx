import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
import {Link, Router} from "@reach/router";
import AuthManager from "../services/AuthManager";

const AppHeader: FunctionComponent = () => {
  const { isLoggedIn } = AuthManager
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/teams" className="nav-link">Teams</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              {isLoggedIn && <li className="nav-item">
                <button className="btn btn-danger" onClick={AuthManager.logout}>Logout</button>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default AppHeader
