import "../css/components/Card.css";

import React from "react";
import { useNavigate } from "react-router";

const Card = ({ header, subheader, image, alt, link, isMini }) => {
  const navigate = useNavigate();

  const goToLesson = () => {
    navigate(link);
  };

  return (
    <div className={"card" + (isMini ? " mini" : "")} onClick={goToLesson}>
      <div className="flex-column img-column">
        <img src={image} alt={alt} className="img" />
      </div>
      <div className="flex-column">
        <p className="header">{header}</p>
        <p className="subheader">{subheader}</p>
        <p className="creator">The Creator • 0 years ago</p>
      </div>
    </div>
  );
};

export default Card;
