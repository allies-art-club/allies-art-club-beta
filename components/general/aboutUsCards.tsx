import React from "react";
// import "../../globals.scss";

const AboutUsCards = () => {
  type CardProps = {
    title1: string;
    title2: string;
    description: string;

    iconColor?: string;
    headerBgColor: string;
  };

  const Card = ({
    title1,
    title2,
    description,
    iconColor,
    headerBgColor,
  }: CardProps) => (
    // To allow the cards to take full width when stacked
    <div className="w-full"> 
      <div className="h-full bg-white p-6 md:p-8 border-2 border-black border-dashed rounded-xl flex flex-col justify-start">
        <div
          className={`mb-3 p-2 text-white flex flex-col items-center justify-center font-bold ${headerBgColor}`}
        >
          <h5 className="mb-0 leading-tight font-balloon">{title1}</h5>
          <h5 className="mb-0 leading-tight font-balloon">{title2}</h5>
        </div>
        <p className="text-center mx-auto flex-grow leading-normal">
          {description}
        </p>
      </div>
    </div>
  );

  const cardsData = [
    {
      title1: "CREATIVE",
      title2: "EXPRESSION",
      description:
        "Create inclusive opportunities for people to express their ideas, knowledge and experiences through a range of artistic mediums.",

      headerBgColor: "bg-[#2F60DE]",
    },
    {
      title1: "COLLECTIVE",
      title2: "CARE",
      description:
        "Provide fun, safe and accessible spaces for people to connect, build supportive relationships and improve their health and wellbeing.",

      headerBgColor: "bg-[#FF25AB]",
    },
    {
      title1: "CULTURAL",
      title2: "EMPOWERMENT",

      description:
        "Develop people's creative skills, knowledge and involvement in generating positive social change through art and culture.",

      headerBgColor: "bg-[#F4BC33]",
    },
  ];

  return (
    <div className="py-5 md:py-o font-balloon">
      <div className="mx-auto max-w-7xl">
        {/*
          *** KEY CHANGE HERE ***
          flex-col: Stacks cards vertically by default (mobile)
          md:flex-row: Switches to horizontal row layout from the 'md' breakpoint and up (tablet/desktop)
          gap-4: Provides spacing between the stacked cards AND between the horizontal cards.
        */}
        <div className="flex flex-col md:flex-row gap-4"> 
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title1={card.title1}
              title2={card.title2}
              description={card.description}
              headerBgColor={card.headerBgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsCards;