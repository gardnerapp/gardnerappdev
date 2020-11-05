import React from "react"
import PropTypes from "prop-types"
class NavBar extends React.Component {
  render () {
    return (
      <React.Fragment>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand my-nav" href="#"style={{fontSize: "2em"}}>Gardner App Development</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="https://podcasts.apple.com/us/podcast/coreys-corner/id1479097455"><i className="fas fa-podcast"/> <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/gardnerapp"><i className="fab fa-github-square"/></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://medium.com/@c0reysc0rner63"> <i className="fas fa-book"/></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.youtube.com/channel/UCfd8A1xfzqk7veapUhe8hLQ?view_as=subscriber"> <i className="fab fa-youtube"/></a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="full"/>
      </React.Fragment>
    );
  }
}

export default NavBar
