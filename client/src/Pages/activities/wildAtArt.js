import React, { Fragment } from "react";
import {
  Paragraph,
  Link,
  Section,
  TextImageTop,
  ListElement,
} from "../../Components/Styled/styled.js";
import { ArticleList } from "../../Components/Styled/article.styled.js";

import TitleBanner from "../../Components/titleBanner/titleBanner.js";

const WildArt = () => {
  return (
    <Fragment>
      <Section>
        <TitleBanner
          sideSrc1={"/assets/general/starsL.png"}
          sideSrc2={"/assets/general/starsR.png"}
          centreSrc={"/assets/general/curvedLine.png"}
          title={"Wild At Art"}
        />
        <picture>
          <source
            media="(max-width: 1024px)"
            srcSet="/assets/activities/events/wildAtArt/wildAtArt1-small.png 1x, /assets/activities/events/wildAtArt/wildAtArt1-large.png 2x"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="/assets/activities/events/wildAtArt/wildAtArt1-2x.png"
          />
          <TextImageTop
            right={true}
            src={"/assets/activities/events/wildAtArt/wildAtArt1-large.png"}
            alt="Artist unite logo"
          />
        </picture>
      </Section>
      <Section>
        <Paragraph>
          Our creative and eco-conscious event will run from 1 – 5pm and will
          include an art market, free arts and crafts activities for all ages,
          live DJ sets, food and a welcoming and wildly decorated space to
          celebrate our connection to the natural world and enjoy being part of
          a creative and collaborative community.
        </Paragraph>
      </Section>
      <Section>
        <Paragraph>
          This event is run in collaboration with Mother Roots, a local
          eco-friendly gardening company who will be on-hand to answer any
          gardening queries you might have.{" "}
        </Paragraph>
        <Paragraph>
          Wild At Art is the first event we're launching under our new umbrella
          project 'Creative Ecologies', which aims to explore how we can live
          well together on our shared planet. If you'd like to get involved in
          this project, please talk to our team at the fair who will be
          collecting names, ideas and suggestions.{" "}
        </Paragraph>
        <Paragraph>
          <b>Address:</b>
          <br />
          Vibast Community Centre
          <br />
          167 Old Street <br />
          London EC1V 9NH <br />{" "}
        </Paragraph>
        <Paragraph>
          What will be included on the day? <br />
        </Paragraph>
        <Paragraph>
          <b>Art Market</b>
          <br />
          Support local artists and browse a diverse selection of visual arts
          inspired by nature, including paintings, drawings, digital art,
          jewellery, glassware, terrariums and more! <br />
        </Paragraph>
        <Paragraph>
          <b>Arts & Crafts</b>
          <br />
          We will have tables stocked with a range of arts and crafts supplies
          for all ages to get involved in creating nature-inspired artwork,
          which will be supported by our lovely volunteers. <br />
        </Paragraph>
        <Paragraph>
          <b>Poetree</b>
          <br />
          We will be writing poems on paper leaves to adorn our tree
          installation with a collection of words that express our views and
          connections to the natural world. <br />
        </Paragraph>

        <Paragraph>
          <b>Donate-what-you-can-buffet</b>
          <br />
          We will have tea, coffee and a spread of food and non-alcoholic drinks
          available, which you can help yourself to and donate what you can to
          support our club.
          <br />
        </Paragraph>

        <Paragraph>
          <b>Accessibility</b>
          <br />
          This is a step-free venue which is wheelchair accessible and
          family-friendly.
          <br />
        </Paragraph>
      </Section>
      <Section>
        <Paragraph>
          This event is free entry, and you’re welcome to turn up on the day or
          book tickets via Eventbrite here{" "}
          <Link
            rel="noopener"
            target="_blank"
            href="https://www.eventbrite.co.uk/e/wild-at-art-a-community-arts-fair-inspired-by-nature-tickets-840038205887?aff=oddtdtcreator"
          >
            here
          </Link>
        </Paragraph>
        <Paragraph>
          Many thanks to our funders Islington Giving and Cripplegate Foundation
          for supporting this event!
        </Paragraph>
      </Section>
    </Fragment>
  );
};

export default WildArt;
