import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../BackgrooundAnimation/animationData.json";
import { SectionAnimation } from "../../styles/GlobalComponents/index";

class UncontrolledLottie extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <>
        <SectionAnimation>
          <Lottie options={defaultOptions} />
        </SectionAnimation>
      </>
    );
  }
}

export default UncontrolledLottie;
