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

const CommunityArt = () => {
  return (
    <Fragment>
      <Section>
        <TitleBanner
          sideSrc1={"/assets/general/starsL.png"}
          sideSrc2={"/assets/general/starsR.png"}
          centreSrc={"/assets/general/curvedLine.png"}
          title={"Allie’s Community Arts Fair!"}
        />
        <picture>
          <source
            media="(max-width: 1024px)"
            srcSet="/assets/activities/events/alliesCommunityArtsFair/alliesCommunityArtsFair1-small.png 1x, /assets/activities/events/alliesCommunityArtsFair/alliesCommunityArtsFair1-large.png 2x"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="/assets/activities/events/alliesCommunityArtsFair/alliesCommunityArtsFair1-2x.png"
          />
          <TextImageTop
            right={true}
            src={
              "/assets/activities/events/alliesCommunityArtsFair/alliesCommunityArtsFair1-large.png"
            }
            alt="Community arts fair poster"
          />
        </picture>
        <Paragraph>
          Join Allie’s Art Club on Saturday the 23rd September 1 – 5pm at the
          Vibast Community Centre for our late Summer Community Arts Fair.
        </Paragraph>
        <Paragraph>
          This vibrant event is free to attend and will be a celebration of
          local arts and culture in a welcoming community space. The day will
          include an art market, free arts and crafts activities for all ages, a
          live DJ set and feel-good playlist, and plenty of space to meet local
          people and enjoy being part of a creative and collaborative community.
        </Paragraph>{" "}
      </Section>

      <Section>
        <Paragraph>
          <b>Art Market</b>
          <br />
          1 – 5pm
          <br /> <br />
          Support local artists and browse a diverse selection of visual arts,
          including paintings, drawings, digital art, jewellery, glassware,
          terrariums and more!
        </Paragraph>
      </Section>
      <Section>
        <Paragraph>
          <b>Arts & Crafts</b>
          <br />
          1 – 5pm
          <br /> <br />
          We will have tables stocked with a range of arts and crafts supplies
          for all ages to get involved in creative activities, which will be
          supported by our lovely volunteers.
        </Paragraph>
      </Section>
      <Section>
        <Paragraph>
          <b>Community Potluck</b>
          <br />
          1 – 5pm
          <br /> <br />
          We will also have a potluck buffet, with a range of dishes brought by
          local people. All visitors are welcome to contribute any dish they
          like and share food with our community.
          <br /> <br />
          <i>Please note:</i> if you’re bringing food, please write if it
          contains any allergens such as nuts, soya, gluten or dairy.
        </Paragraph>
      </Section>
      <Section>
        <Paragraph>
          <b>Consult our Co-op!</b>
          <br />
          3 - 4pm
          <br /> <br />
          Love the arts? Want to be part of a creative community?
          <br />
          Want to know how co-ops can empower artists & communities?
          <br />
          Want your say on what our club provides?
          <br /> <br />
          Join us for an in-person discussion about co-ops, what you'd like from
          our club and how you can be part of a creative community that empowers
          local people!
        </Paragraph>
      </Section>
      <Section>
        <Paragraph>
          To book your ticket, please head to our Eventbrite page:{" "}
          <Link
            rel="noopener"
            target="_blank"
            href="https://allies-community-arts-fair.eventbrite.co.uk"
          >
            here
          </Link>
          .
          <Paragraph>
            This event is run by Allie’s Art Club in collaboration with SKAPED,
            an arts charity who empower young people to create positive social
            change through the arts.
          </Paragraph>
          <Paragraph>
            Many thanks to our funders Social Ark and the Foundation for Future
            London.
          </Paragraph>
        </Paragraph>
        <Paragraph>
          Event address:
          <br />
          Vibast Community Centre <br />
          167 Old Street, <br />
          EC1V 9NH <br />
        </Paragraph>
        <Paragraph>
          <b>Accessibility</b>
          <br />
          This is a step-free venue which is wheelchair accessible and
          family-friendly.
        </Paragraph>
      </Section>
    </Fragment>
  );
};

export default CommunityArt;
