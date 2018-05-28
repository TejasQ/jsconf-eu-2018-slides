import React, { Component } from "react";
import Praise from "react-praise";

import Slide from "./Slide";
import Contiamo from "./Contiamo";
import "./App.css";

class App extends Component {
  state = {
    activeSlide: 0
  };
  componentDidMount() {
    document.addEventListener("keyup", this.respondToKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keyup", this.respondToKeyPress);
  }
  respondToKeyPress(e) {
    switch (e.keyCode) {
      case 37:
        this.previousSlide();
        break;
      case 39:
        this.nextSlide();
        break;
    }
  }
  changeSlide(activeSlide) {
    this.setState(() => ({ activeSlide }));
  }
  nextSlide() {
    this.setState(prevState => ({
      activeSlide:
        prevState.activeSlide === this.state.slides.length - 1
          ? 0
          : prevState.activeSlide + 1
    }));
  }
  previousSlide() {
    this.setState(prevState => ({
      activeSlide:
        prevState.activeSlide === 0
          ? this.state.slides.length - 1
          : prevState.activeSlide - 1
    }));
  }
  render() {
    return (
      <Praise confidence={0.7}>
        {a => (
          <div style={{ maxWidth: 1366, margin: "0 auto" }}>
            <Slide title="👋🏾" />
            <Slide
              title="Tejas"
              subtitle={<em>like &ldquo;Contagious&rdquo;</em>}
            />
            <Slide title={<Contiamo />} subtitle="Front-End Lead" />
            <Slide
              title={<React.Fragment>You Can't &rarr; You Can</React.Fragment>}
              subtitle="The Welcoming Nature of JavaScript"
            />
            <Slide
              title={
                <em>
                  &ldquo;JavaScript developers should all just jump off a bridge
                  and die&rdquo;
                </em>
              }
              subtitle={
                <div style={{ textAlign: "right" }}>&mdash; Scala Engineer</div>
              }
            />
          </div>
        )}
      </Praise>
    );
  }
}

export default App;
