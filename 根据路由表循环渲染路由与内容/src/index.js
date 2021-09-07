import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import config from "./router/config";

class Chldren extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
    };
  }

  render() {
    if (this.state.props.value) {
      return (
        <div>
          {this.state.props.value.map((route, index) => (
            <div key={index}>
              <Route path={route.path} component={route.component} />
              <Chldren value={route.routes} />
            </div>
          ))}
        </div>
      );
    } else {
      return "";
    }
  }
}

class ROUTER extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
    };
  }

  render() {
    if (this.state.props.value) {
      return (
        <div>
          {this.state.props.value.map((item, index) => (
            <div key={index}>
              <Link to={item.path}>{item.path}</Link>
              <ROUTER value={item.routes} />
            </div>
          ))}
        </div>
      );
    } else {
      return "";
    }
  }
}

class Game extends React.Component {
  render() {
    return (
      <Router>
        <ROUTER value={config} />
        <Chldren style={{ border: "1px solid red" }} value={config}></Chldren>
        {/* <Chldren value /> */}
      </Router>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));
