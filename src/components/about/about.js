import React, { useState } from "react";
import * as animation1 from "../../images/about/animation-1.json";
import Lottie from "react-lottie";

const About = (props) => {
  const isStopped = useState(false);
  const isPaused = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <section className="about-section section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-12">
            <div className="about-left-content">
              <div className="image">
                <Lottie
                  options={defaultOptions}
                  height={500}
                  width={500}
                  isStopped={isStopped}
                  isPaused={isPaused}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-12">
            <div className="about-right-content">
              <h2 className="title">ABOUT TEAMS</h2>
              <h3 className="sub-title">
                Our approach ensures flexibility, adaptability, & rapid
                response.
              </h3>
              <p className="text">
                Welcome to Trait, where innovation meets implementation, &
                technology transforms possibilities into realities. We are a
                dynamic and forward-thinking team committed to delivering
                cutting-edge services.
                <span>
                  our mission is clear – to provide comprehensive and customized
                  IT solutions that align seamlessly with your objectives. We
                  believe in not just meeting but exceeding expectations.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-1">
        <svg width="429" height="593" viewBox="0 0 429 593" fill="none">
          <circle cx="296.5" cy="296.5" r="296.5" fill="url(#cc318_1506)" />
          <defs>
            <radialGradient
              id="cc318_1506"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(296.5 296.5) rotate(90) scale(296.5)"
            >
              <stop offset="0" stopColor="#CED0FF" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="shape-2">
        <svg width="529" height="529" viewBox="0 0 529 529" fill="none">
          <circle cx="264.5" cy="264.5" r="264.5" fill="url(#oo1508)" />
          <defs>
            <radialGradient
              id="oo1508"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(264.5 264.5) rotate(90) scale(264.5)"
            >
              <stop offset="0" stopColor="#FBB132" stopOpacity="0.2" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default About;
