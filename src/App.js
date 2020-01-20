import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={HatsPage} />>
      </div>
    );
  }
}

export default App;
