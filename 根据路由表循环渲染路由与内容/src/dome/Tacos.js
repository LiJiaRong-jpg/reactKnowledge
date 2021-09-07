import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "../router/config";

// const RouteWithSubRoutes = (routes) => (
//   <Route
//     path={route.path}
//     render={(props) => (
//       // pass the sub-routes down to keep nesting
//       <route.component {...props} routes={route.routes} />
//     )}
//   />
// );

class Tacos extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <h2>Tacos</h2>
      </div>
    );
  }
}

export default Tacos;
