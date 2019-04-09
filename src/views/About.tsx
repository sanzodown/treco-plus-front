import React, {FunctionComponent} from 'react'
import styled from 'styled-components'

const AboutInner = styled.div`
  
`

const About: FunctionComponent = () => {

  return (
    <div className="wrapper ">
      <div className="sidebar" data-color="purple" data-background-color="white">
        <div className="logo">
          <a href="http://www.creative-tim.com" className="simple-text logo-mini">
            CT
          </a>

          <a href="http://www.creative-tim.com" className="simple-text logo-normal">
            Creative Tim
          </a>
        </div>

        <div className="sidebar-wrapper">
          <ul className="nav">
            <li className="nav-item active  ">
              <a className="nav-link" href="#0">
                <i className="tim-icons icon-chart-pie-36"></i>
                <p>Dashboard</p>
              </a>
            </li>

          </ul>
        </div>
      </div>
      <div className="main-panel">
        <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
          <div className="container-fluid">
            <div className="navbar-wrapper">

              <a className="navbar-brand" href="#pablo">Dashboard</a>
            </div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index"
                    aria-expanded="false" aria-label="Toggle navigation">
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon icon-bar"></span>
              <span className="navbar-toggler-icon icon-bar"></span>
              <span className="navbar-toggler-icon icon-bar"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#pablo">
                    <i className="tim-icons icon-bell-55"></i> Notifications
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="content">
          <div className="container-fluid">
          </div>
        </div>
        <footer className="footer">
          <div className="container-fluid">
            <nav className="float-left">
              <ul>
                <li>
                  <a href="https://www.creative-tim.com">
                    Creative Tim
                  </a>
                </li>
              </ul>
            </nav>
            <div className="copyright float-right">
              &copy;
              <script>
                document.write(new Date().getFullYear())
              </script>
              , made with <i className="tim-icons icon-heart-2"></i> by
              <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a> for a better web.
            </div>

          </div>
        </footer>
      </div>
    </div>
  )
}

export default About
