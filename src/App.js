import React, { Component } from "react";
import Praise from "react-praise";

import Slide from "./Slide";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    title: "",
    subtitle: ""
  };
  render() {
    return (
      <Praise
        confidence={0.7}
        phrases={{
          hi: () => <Slide title="👋🏾" />,
          "about me": () => (
            <Slide title="Tejas" subtitle="Like &quot;Contagious&quot;." />
          )
        }}
      >
        {a => a || null}
      </Praise>
    );
  }
}

export default App;
