"use client";
import React from "react";
import "../Styled/ourValuesCards.scss";


const OurValuesCards = () => {
  const titles = [
    {
      text: "CONNECT",

      description:
        "We value collaborative relationships, community, and solidarity.",
      bgColor: "#2f60de",
    },
    {
      text: "care",

      description: "We value empathy, compassion and social responsibility.",
      bgColor: "#ff25ab",
    },
    {
      text: "create",

      description: "We value imagination, self-expression and innovation.",
      bgColor: "#f4bc33",
    },
  ];
  return (
    <div
      className="
   three-titles-container
   "
    >
      {titles.map((title, index) => (
        <div
          key={index}
          style={{ backgroundColor: title.bgColor }}
          className="three-titles-card"
        >
          <h2
            className="font-balloon 
         title-card
         "
          >
            {title.text}
          </h2>

          <p className="title-description text-left leading-loose">
            {title.description}
          </p>
        </div>
      ))}
    </div>
  );
};
export default OurValuesCards;
