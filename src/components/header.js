import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
  isHome = true;
  header = {
    display: "flex",
    listStyle: "none",
    height: '50px',
    backgroundColor:'#d31145',
    justifyContent: 'center',
    alignContent: "center",
    position: "relative",
    margin: 0
  };
  back = {
    position: "absolute",
    alignContent: "center",
    left: "0",
    top: '25%',
    margin: 'auto 0 ',
    paddingLeft: '20px'
  };

  render() {
    return (
      <div style={this.header}>
          <div style={this.back}>
            { window.location.pathname !== '/' && <FontAwesomeIcon icon={faArrowLeftLong} style={{color: "white", fontSize: '25px'}} onClick = {() => window.history.back()}/>}
          </div>
          <div style={{margin: 'auto 0'}}>
            <img src="./logo512.png" height='30px' width='30px'/>
          </div>
      </div>
    );
  }
}

export default Header;
