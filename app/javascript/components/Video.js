import React from "react"

class Video extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="stack-container">
          <div className="row">
              <div className="col-md-6">
              <video
                     autoPlay="autoPlay"
                     controls="controls"
                     src="../assets/Flutter_Resteraunt_Demo.mp4"
                     >
              </video>
              </div>
              <div className="col-md-5">
                  <h2 className="stack-info" style={{margin: "1em"}}>iOS App Development With <b style={{color: "#13b9fd"}}>Flutter </b></h2>
                  <br/>
              </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Video
