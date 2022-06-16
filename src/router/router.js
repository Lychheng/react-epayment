import React from "react";
import { Route } from "react-router-dom";
import Posts from "../pages/Posts";
import Header from "../components/header";
import Content from "../components/content";
import Home from "../pages/home";

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Content>
            <Route exact path="/" component={Home} />
            <Route  path="/posts" component={Posts} />
        </Content> 
      </React.Fragment>
    );
  }
}

export default ReactRouter;
