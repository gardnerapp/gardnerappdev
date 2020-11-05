import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"

function Changing(){

  const mobileData = {
    icon: "fas fa-mobile-alt ic",
    caption: "Mobile Applications",
    style: {
      color: "#00e6b8"
    }
  }
  const webData = {
    icon: "fas fa-desktop ic",
    caption: "Web Design",
    style: {
      color: "#ff6600"
    }
  }
  const internetData = {
    icon: "fas fa-wifi ic",
    caption: "& Everything Internet",
    style: {
      color: "#cc00cc"
    }
  }
  const data = [mobileData, webData, internetData];
  const [iterable, setIterable] = useState(0);
  const [iconData, setIconData] = useState(mobileData);


  function changeIterable(){
    if(iterable === 0){
      setIterable((prevIterable) => prevIterable + 1)
    }
    else if(iterable === 1){
      setIterable((prevIterable) => prevIterable + 1)
    }
    else{
      setIterable((prevIterable) => prevIterable - 2)
    }
  }

  useEffect(() => {
    const intervalID = setInterval(() =>{
      changeIterable();
      setIconData(data[iterable])
    }, 3000);
    return () => clearInterval(intervalID)
  })

  return (
      <React.Fragment>
        <div className="stack-container">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
              <i className={iconData.icon} style={iconData.style}/>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <h3 style={iconData.style}
              className="ic-caption"
              >{iconData.caption}</h3>
            </div>
          </div>
        </div>
      </React.Fragment>
  );
}

export default Changing
