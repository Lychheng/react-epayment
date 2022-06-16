import React, { Component } from "react";

class Content extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    const {children} = this.props;
    return (
        <div style={{width:'100%', justifyContent: 'center', display: "flex"}}>
            <div style={{width:'390px',padding: '30px'}}>
            {children}
            </div>
        </div>
    );
  }
}

export default Content;
