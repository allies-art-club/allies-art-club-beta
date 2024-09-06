import React, { Fragment } from "react";
import {
  Paragraph,
  TextImageTop,
  Section,
  HomepageSubtitles,
} from "../Styled/styled.js";
import "../../app/fonts/arial-nova-cond-bold/stylesheet.css";
import "../../app/fonts/arial-nova-cond/stylesheet.css";

const BodyPage = () => {
  return (
    <Fragment>
      <Section>
        <picture>
          <source
            media="(max-width: 1024px)"
            srcSet="/assets/homepage/homepage1-small.png 1x, /assets/homepage/homepage1-large.png 2x"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="/assets/homepage/homepage1-2x.png"
          />
          <TextImageTop
            $right={true}
            src={"/assets/homepage/homepage1-2x.png"}
            alt="Homepage pic 1"
          />
        </picture>
        <HomepageSubtitles>
          We are a grassroots community arts <br />
          co-operative making waves in the <br />
          cultural landscape.
        </HomepageSubtitles>
        <Paragraph>
          We believe in the power of art to generate positive changes for
          ourselves and our communities, and we’re committed to working in
          collaborative, equitable and empowering ways.
        </Paragraph>
        <Paragraph>Read more about our club here.</Paragraph>
        <picture>
          <source
            media="(max-width: 1024px)"
            srcSet="/assets/homepage/homepage1-small.png 1x, /assets/homepage/homepage1-large.png 2x"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="/assets/homepage/homepage1-2x.png"
          />
          <TextImageTop
            $mobile={true}
            src={"/assets/homepage/homepage1-2x.png"}
            alt="Homepage pic 1"
          />
        </picture>
      </Section>
      <Section>
        <picture>
          <source
            media="(max-width: 1024px)"
            srcSet="/assets/homepage/homepage2-small.png 1x, /assets/homepage/homepage2-large.png 2x"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="/assets/homepage/homepage2-2x.png"
          />
          <TextImageTop
            $left={true}
            src={"/assets/homepage/homepage2-2x.png"}
            alt="Homepage pic 2"
          />
        </picture>
        <HomepageSubtitles>
          Creative explorations and practices for a life-affirming world
        </HomepageSubtitles>
        <Paragraph>
          As an organization and a community, we practice and explore ways of
          creating and sustaining a life-affirming world in which all living
          beings can thrive.
        </Paragraph>
        <Paragraph>Read more about our projects here.</Paragraph>

        <picture>
          <source
            media="(max-width: 1024px)"
            srcSet="/assets/homepage/homepage2-small.png 1x, /assets/homepage/homepage2-large.png 2x"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="/assets/homepage/homepage2-2x.png"
          />
          <TextImageTop
            $mobile={true}
            src={"/assets/homepage/homepage2-2x.png"}
            alt="Homepage pic 2"
          />
        </picture>
      </Section>
      <Section>
        <picture>
          <source
            media="(max-width: 1024px)"
            srcSet="/assets/homepage/homepage3-small.png 1x, /assets/homepage/homepage3-large.png 2x"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="/assets/homepage/homepage3-2x.png"
          />
          <TextImageTop
            $right={true}
            src={"/assets/homepage/homepage3-2x.png"}
            alt="Homepage pic 3"
          />
        </picture>
        <HomepageSubtitles>
          Radical creativity rooted in the community.
        </HomepageSubtitles>
        <br /> <br /> <br />
        <Paragraph>
          Our work stems from the power and imagination of local people. We
          stand together boldly as allies to generate cultural movements that
          are led by the people, for the people.
        </Paragraph>
        <Paragraph>Read more about Allie’s journey here.</Paragraph>
        <picture>
          <source
            media="(max-width: 1024px)"
            srcSet="/assets/homepage/homepage3-small.png 1x, /assets/homepage/homepage3-large.png 2x"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="/assets/homepage/homepage3-2x.png"
          />
          <TextImageTop
            $mobile={true}
            src={"/assets/homepage/homepage3-2x.png"}
            alt="Homepage pic 3"
          />
        </picture>
      </Section>
    </Fragment>
  );
};

export default BodyPage;
