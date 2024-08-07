import React, { Fragment } from "react";
import {
  Paragraph,
  Link,
  Section,
  TextImageTop,
  ListElement,
} from "../../../../components/Styled/styled.js";
import { ArticleList } from "../../../../components/Styled/article.styled.js";

import TitleBanner from "../../../../components/titleBanner/titleBanner.js";

const ArtUnite = () => {
  return (
    <Fragment>
      <Section>
        <TitleBanner
          sideSrc1={"/assets/general/starsL.png"}
          sideSrc2={"/assets/general/starsR.png"}
          centreSrc={"/assets/general/curvedLine.png"}
          title={"Artist Unite!"}
        />
        <picture>
          <source
            media="(max-width: 1024px)"
            srcSet="/assets/activities/events/artistUnite/artistUnite1-small.png 1x, /assets/activities/events/artistUnite/artistUnite1-large.png 2x"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="/assets/activities/events/artistUnite/artistUnite1-2x.png"
          />
          <TextImageTop
            $right={true}
            src={
              "/assets/activities/events/artistUnite/artistUnite1-large.png"
            }
            alt="Artist unite logo"
          />
        </picture>
        <Paragraph>
          On Friday the 18 th of August, Allie’s Art Club will be holding a
          special event for artists working in diverse fields to come together,
          discuss the benefits and challenges of our work and learn about
          co-operative solutions.
        </Paragraph>{" "}
      </Section>
      <Section>
        <Paragraph>
          This event will include the opportunity for attendees to consult our
          co-op so we know how to meet the needs of local artists we hope to
          work with, and a chance for them to register their interest in
          becoming a member of our co-op.
        </Paragraph>
      </Section>
      <Section>
        <Paragraph>
          Artists of all disciplines and levels of experience are welcome - but
          this event is designed for those seeking or doing creative work as a
          profession (not a hobby!).{" "}
        </Paragraph>

        <Paragraph>
          <b>Connect:</b>
          <br />
          6.30 - 7pm: Nibbles + Networking
          <br />
          Meet Allie's Art Club and other local artists and enjoy complementary
          nibbles.
          <br /> {" "}
          </Paragraph> 
          <Paragraph>
          <b>Learn + Discuss</b>
          <br />
          7 - 8pm: Presentation + Discussion <br />
          During this 1 hour workshop, we'll examine, discuss and learn about
          the following: <br />
          <ArticleList>
            <ListElement>The pros and cons of working as an artist</ListElement>
            <ListElement>
              Labour exploitation and inequality in the arts industry
            </ListElement>
            <ListElement>
              What we need to practice our creative work and live well as
              artists
            </ListElement>
            <ListElement>
              About co-operatives and how they empower artists and communities{" "}
            </ListElement>
            <ListElement>
              How to work with or become a member of Allie&#39;s Art Club
            </ListElement>
          </ArticleList>
        </Paragraph>
        <Paragraph>
          The evening will be held at SPACE4, a co-working space for
          co-operatives and socially- engaged organisations.
        </Paragraph>
      </Section>
      <Section>
        <Paragraph>
          Address:
          <br />
          SPACE4 <br />
          113-115 Fonthill Rd, <br />
          Finsbury Park, <br />
          London N4 3HH <br />
        </Paragraph>

        <Paragraph>
          To book your ticket, please head to our Eventbrite page:{" "}
          <Link
            rel="noopener"
            target="_blank"
            href="https://artists-unite.eventbrite.co.uk"
          >
            here
          </Link>
          .
          <Paragraph>
            Please note that we have limited space for this event, so you must
            book a ticket to attend (and please do turn up if you’ve booked so
            other artists don’t miss out on the opportunity!)
          </Paragraph>
        </Paragraph>
      </Section>
    </Fragment>
  );
};

export default ArtUnite;
