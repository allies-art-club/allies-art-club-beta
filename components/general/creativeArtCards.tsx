import Image from "next/image";
import "../Styled/creativeArtCards.scss";



export default function CreativeArtCards() {
  const cards = [
    {
      title: "Art Care",
      image: "/images/about-us/ArtCare.webp",
      text: "How can the arts support our health and wellbeing?",
    },
    {
      title: "Creative Ecologies",
      image: "/images/about-us/CreativeEcologies.webp",
      text: "How can we live well together on our shared planet?",
    },
    {
      title: "Reimagining Work",
      image: "/images/about-us/ReimaginingWork.webp",
      text: "How can our labour practices be life-affirming?",
    },
  ];

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <h2 className="card-title">{card.title}</h2>
          <div className="card-image">
            <Image
              src={card.image}
              alt={card.title}
              width={150}
              height={150}
              className="card-img"
            />
          </div>
          <p className="card-text"><i>{card.text}</i></p>
        </div>
      ))}
    </div>
  );
}
