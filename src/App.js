import React, { Component } from "react";
import Praise from "react-praise";

import Slide from "./Slide";
import slides from "./slides";
import makePhrases from "./phrases";

class App extends Component {
  state = {
    activeSlide: 0,
    slides
  };

  // I have event listeners in case this doesn't work live hahaha
  componentDidMount() {
    document.addEventListener("keyup", this.respondToKeyPress);
    document.addEventListener("click", this.nextOnClick);
  }
  componentWillUnmount() {
    document.removeEventListener("keyup", this.respondToKeyPress);
    document.removeEventListener("click", this.nextOnClick);
  }
  nextOnClick = () => {
    this.goToNextSlide();
  };
  respondToKeyPress = ({ keyCode }) => {
    switch (keyCode) {
      case 37:
        this.goToPreviousSlide();
        break;
      case 39:
        this.goToNextSlide();
        break;
      default:
        return;
    }
  };
  changeSlide(activeSlide) {
    this.setState(() => ({ activeSlide }));
  }
  goToNextSlide() {
    this.setState(prevState => ({
      activeSlide:
        prevState.activeSlide === this.state.slides.length - 1
          ? 0
          : prevState.activeSlide + 1
    }));
  }
  goToPreviousSlide() {
    this.setState(prevState => ({
      activeSlide:
        prevState.activeSlide === 0
          ? this.state.slides.length - 1
          : prevState.activeSlide - 1
    }));
  }
  render() {
    const { slides, activeSlide } = this.state;
    const { title, subtitle } = slides[activeSlide];
    return (
      <Praise
        phrases={makePhrases(slide => this.changeSlide(slide))}
        confidence={0.8}
      >
        {() => <Slide title={title} subtitle={subtitle} />}
      </Praise>
    );
  }
}

export default App;
