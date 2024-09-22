import React, { Fragment } from "react";
import Image from "next/image";
import {
  Paragraph,
  TextImageTop,
  Section,
  HomepageSubtitles,
  Link,
} from "../Styled/styled.js";

import {
  StarSection,
  StarWrap,
  TextWrap,
  HeartsTextWrap,
  HeartsSection,
  HeartsWrap,
} from "../Styled/homepage.styled.js";
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
          We are a grassroots community arts
          co-operative making waves in the
          cultural landscape.
        </HomepageSubtitles>
        <Paragraph>
          We believe in the power of art to generate positive changes for
          ourselves and our communities, and we’re committed to working in
          collaborative, equitable and empowering ways.
        </Paragraph>
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
        <StarSection>
          {" "}
          <StarWrap>
            <Image
              src="/assets/general/starL.png"
              alt="Stars L"
              width={200}
              height={162}
              layout="responsive"
            />
          </StarWrap>
          <TextWrap>
            {" "}
            <Paragraph>
              Read more about our club{" "}
              <Link href="/about/about-us">here.</Link>{" "}
            </Paragraph>
          </TextWrap>
        </StarSection>
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




      <Section id="section">
        <HeartsSection>
          {" "}
          <HeartsTextWrap id="heartsSection">
            {" "}
            <Paragraph>
              Read more about our projects{" "}
              <Link href="/activities/projects">here.</Link>{" "}
            </Paragraph>
          </HeartsTextWrap>{" "}
          <HeartsWrap>
            <Image
              src="/assets/general/heartsR.png"
              alt="Stars L"
              width={200}
              height={162}
              layout="responsive"
            />
          </HeartsWrap>
        </HeartsSection>
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
        <br />
        <br />
        <Paragraph>
          Read more about Allie’s journey{" "}
          <Link href="/about/allies-story">here.</Link>{" "}
        </Paragraph>
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
