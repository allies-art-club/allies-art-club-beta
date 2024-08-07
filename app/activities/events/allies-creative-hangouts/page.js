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

const Access2Art = () => {
  return (
    <Fragment>
      <Section>
        <TitleBanner
          sideSrc1={"/assets/general/starsL.png"}
          sideSrc2={"/assets/general/starsR.png"}
          centreSrc={"/assets/general/curvedLine.png"}
          title={"Allie's Creative Hangouts"}
        />
        <picture>
          <source
            media="(max-width: 1024px)"
            srcSet="/assets/activities/events/alliesCreativeHangouts/alliesCreativeHangouts1-small.png 1x, /assets/articles/alliesCreativeHangouts/alliesCreativeHangouts1-large.png 2x"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="/assets/activities/events/alliesCreativeHangouts/alliesCreativeHangouts1-2x.png"
          />
          <TextImageTop
            $right={true}
            src={
              "/assets/activities/events/alliesCreativeHangouts/alliesCreativeHangouts1-large.png"
            }
            alt="Hands writing"
          />
        </picture>
        <Paragraph>
          Allie’s Art Club is excited to be hosting our Creative Hangouts on the
          first Sunday of the month from 2 – 5pm at the Vibast Community Centre
          in Islington.
        </Paragraph>{" "}
        <picture>
          <source
            media="(max-width: 1024px)"
            srcSet="/assets/activities/events/alliesCreativeHangouts/alliesCreativeHangouts1-small.png 1x, /assets/articles/alliesCreativeHangouts/alliesCreativeHangouts1-large.png 2x"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="/assets/activities/events/alliesCreativeHangouts/alliesCreativeHangouts1-2x.png"
          />
          <TextImageTop
            src={
              "/assets/activities/events/alliesCreativeHangouts/alliesCreativeHangouts1-large.png"
            }
            alt="Hands writing"
            $mobile="true"
          />
        </picture>
      </Section>
      <Section>
        <Paragraph>
          These are relaxed social gatherings for visitors to have fun, make
          friends and be creative in a warm and friendly space, with plenty of
          art supplies and snacks available.
        </Paragraph>
        <picture>
          <source
            media="(max-width: 1024px)"
            srcSet="/assets/activities/events/alliesCreativeHangouts/alliesCreativeHangouts2-small.png 1x, /assets/activities/events/alliesCreativeHangouts/alliesCreativeHangouts-large.png 2x"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="/assets/activities/events/alliesCreativeHangouts/alliesCreativeHangouts2-2x.png"
          />
          <TextImageTop
            src={
              "/assets/activities/events/alliesCreativeHangouts/alliesCreativeHangouts2-large.png"
            }
            alt="woman writing"
          />
        </picture>
        <picture>
          <source
            media="(max-width: 1024px)"
            srcSet="/assets/activities/events/alliesCreativeHangouts/alliesCreativeHangouts2-small.png 1x, /assets/activities/events/alliesCreativeHangouts/alliesCreativeHangouts-large.png 2x"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="/assets/activities/events/alliesCreativeHangouts/alliesCreativeHangouts2-2x.png"
          />
          <TextImageTop
            src={
              "/assets/activities/events/alliesCreativeHangouts/alliesCreativeHangouts2-large.png"
            }
            alt="woman writing"
            $mobile="true"
          />
        </picture>
      </Section>
      <Section>
        <Paragraph>
          We will have a variety of arts and crafts supplies for you to choose
          from, but you&#39;re also welcome to bring your own and any ideas or
          projects you&#39;d like to make with us - or just come for a cuppa and
          a chat!{" "}
        </Paragraph>

        <Paragraph>
          All abilities and identities are welcome to join us – you don’t need
          to be a professional artist, although these events are for adults over
          18 only.
        </Paragraph>
        <picture>
          <source
            media="(max-width: 1024px)"
            srcSet="/assets/activities/events/alliesCreativeHangouts/alliesCreativeHangouts3-small.png 1x, /assets/activities/events/alliesCreativeHangouts/alliesCreativeHangouts-large.png 2x"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="/assets/activities/events/alliesCreativeHangouts/alliesCreativeHangouts3-2x.png"
          />
          <TextImageTop
            $right={"true"}
            src={
              "/assets/activities/events/alliesCreativeHangouts/alliesCreativeHangouts3-large.png"
            }
            alt="People writing"
          />
        </picture>

        <picture>
          <source
            media="(max-width: 1024px)"
            srcSet="/assets/activities/events/alliesCreativeHangouts/alliesCreativeHangouts3-small.png 1x, /assets/activities/events/alliesCreativeHangouts/alliesCreativeHangouts-large.png 2x"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="/assets/activities/events/alliesCreativeHangouts/alliesCreativeHangouts3-2x.png"
          />
          <TextImageTop
            $mobile={"true"}
            src={
              "/assets/activities/events/alliesCreativeHangouts/alliesCreativeHangouts3-large.png"
            }
            alt="People writing"
          />
        </picture>
        <Paragraph>
          Tickets are free or by donation, with solidarity tickets available if
          you&#39;re able to contribute to our shared money pot.
        </Paragraph>
      </Section>
      <Section>
        <Paragraph>
          Our Creative Hangouts will be on the following dates:
        </Paragraph>
        <ArticleList>
          <ListElement>2nd April</ListElement>
          <ListElement>7th May</ListElement>
          <ListElement>4th June</ListElement>
          <ListElement>2nd July</ListElement>
          <ListElement>6th August</ListElement>
          <ListElement>3rd September</ListElement>
        </ArticleList>

        <Paragraph>
          You can see more details and book your ticket on Eventbrite{" "}
          <Link
            rel="noopener"
            target="_blank"
            href="https://allies-creative-hangouts.eventbrite.co.uk"
          >
            here
          </Link>
          .
          <Paragraph>
            Please note: bookings are needed as there is limited space
            available.
          </Paragraph>
        </Paragraph>
      </Section>
    </Fragment>
  );
};

export default Access2Art;
