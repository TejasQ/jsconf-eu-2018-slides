import React from "react";

import "./Slide.css";

const Slide = ({ title, subtitle }) => (
  <div className="slide">
    <div className="meta">@tejaskumar_</div>
    <h1>{title}</h1>
    {subtitle && <h2>{subtitle}</h2>}
  </div>
);

export default Slide;
