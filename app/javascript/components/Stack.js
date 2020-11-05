import React from "react"
import PropTypes from "prop-types"
class Stack extends React.Component {
  render () {
    return (
        <div className="stack-container">
          <div className="row">
            <div className="col-md-6" style={{marginTop: "1em"}}>
                <img src="/assets/logo.svg" className="React-logo" alt="React
            logo" />
            </div>
            <div className="col-md-6"  style={{marginTop: "1em"}}>
                <img src="/assets/ruby.jpg" className="Ruby-logo" alt="Ruby Logo"/>
            </div>
          </div>
          <div className="row" style={{marginTop: "1em"}}>
            <div className="col-md-1"/>
            <div className="col-md-10">
              <h2 className="stack-info">Full Stack <strong style={{color: "#61dbfb"}}> React </strong> and <strong style={{color: "#CC0000"}}> Ruby on Rails </strong> Development </h2>
            </div>
            <div className="col-md-1"/>
          </div>
        </div>
    );
  }
}

export default Stack
