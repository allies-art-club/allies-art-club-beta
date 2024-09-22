"use client";
import React from "react";
import Image from "next/image";

import {
  ArtLink,
  BorderWrap,
  ArtIcon,
  SectionText,
  BorderSubtitles,
  IconWrapper,
  TextCont,
} from "../../../components/Styled/borderParagraph.styled.js";
import {
  Section,
  Paragraph,
  Article,
  HomepageSubtitles, // Only importing from one source
  TextImageTop,
} from "../../../components/Styled/styled";

import SideNav from "../../../components/sideNav/sideNav.js";
import TitleBanner from "../../../components/titleBanner/titleBanner.js";
import {
  MissionWrapper,
  MissionDesc,
  MissionBorder,
} from "../../../components/Styled/about.styled";
import StickyNote from "../../../components/stickyNote.js";
const AlliesImpact = () => {
  return (
    <Article>
      <SideNav
        mainCategory={"about"}
        navLinks={[
          "Allie's Art Club",
          "Allie's Mission",
          "Allie's Values",
          "Allie's Story",
        ]}
      />

      <TitleBanner
        sideSrc1={"/assets/general/starsL.png"}
        sideSrc2={"/assets/general/starsR.png"}
        title={"Allie's Impact"}
      ></TitleBanner>
      <Section id="alliesImpact">
        {" "}
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
        <br />
        <br />
        <br />
        <HomepageSubtitles>
          We believe in the power of art to generate positive change for
          ourselves and our communities.
        </HomepageSubtitles>
        <br />
        <br />
        <br />
        <br />
        <Paragraph>
          Our club was born in 2021 at food bank in North London and has
          benefited people from range of background in a number of ways.
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
        <BorderWrap>
          <SectionText>
            <TextCont>
              <BorderSubtitles>Connecting local people.</BorderSubtitles>
              <Paragraph>
                Over 500 people have attended or participated in our projects
                and events which have provided inclusive opportunities for local
                people to connect and be a part of a creative and collaborative
                community.
              </Paragraph>
            </TextCont>
            <IconWrapper $left={true}>
              <ArtIcon>
                <Image
                  src="/assets/newIcons/Icon12.png"
                  alt="Icon 12"
                  width={500}
                  height={500}
                  layout="responsive"
                />
              </ArtIcon>
            </IconWrapper>
          </SectionText>
        </BorderWrap>
      </Section>
      <Section>
        <BorderWrap>
          <SectionText>
            <TextCont>
              <BorderSubtitles>Increasing access to art</BorderSubtitles>
              <Paragraph>
                We distributed at supplies to 100 families at the food bank
                where our club was born, and all our events centre being
                accessible and inclusive for people with a range of identities,
                abilities, backgrounds, and incomes.
              </Paragraph>
            </TextCont>
            <IconWrapper $right={true}>
              <ArtIcon>
                <Image
                  src="/assets/newIcons/Icon7.png"
                  alt="Icon 7"
                  width={500}
                  height={500}
                  layout="responsive"
                />
              </ArtIcon>
            </IconWrapper>
          </SectionText>
        </BorderWrap>
      </Section>
      <Section>
        <BorderWrap>
          <SectionText>
            <TextCont>
              <BorderSubtitles>
                Supporting people&apos;s health and wellbeing
              </BorderSubtitles>
              <Paragraph>
                Our Art Care umbrella project has supported the mental health
                and wellbeing of over 300 people by providing resources,
                creative health activities and caring social spaces.
              </Paragraph>
            </TextCont>
            <IconWrapper $left={true}>
              <ArtIcon>
                <Image
                  src="/assets/newIcons/Icon9.png"
                  alt="Icon 9"
                  width={500}
                  height={500}
                  layout="responsive"
                />
              </ArtIcon>
            </IconWrapper>
          </SectionText>
        </BorderWrap>
      </Section>
      <Section>
        <BorderWrap>
          <SectionText>
            <TextCont>
              <BorderSubtitles>
                Developing people&apos;s skills and knowledge
              </BorderSubtitles>
              <Paragraph>
                Our projects, events and workshops have developed local people&apos;s
                artistic skills and their knowledge of a range of topics, such
                as mental health, social activism, creative entrepreneurship,
                and co-operatives.
              </Paragraph>
            </TextCont>
            <IconWrapper $right={true}>
              <ArtIcon>
                <Image
                  src="/assets/newIcons/Icon5.png"
                  alt="Icon 5"
                  width={500}
                  height={500}
                  layout="responsive"
                />
              </ArtIcon>
            </IconWrapper>
          </SectionText>
        </BorderWrap>
      </Section>
      <Section>
        <BorderWrap>
          <SectionText>
            <TextCont>
              <BorderSubtitles>Promoting diverse artists</BorderSubtitles>
              <Paragraph>
                We&apos;ve worked with over 80 artists, musicians, DJs, and
                photographers from diverse backgrounds, who have sold, showcased
                and increased the visibility of their work through our projects
                and events.
              </Paragraph>
            </TextCont>
            <IconWrapper $left={true}>
              <ArtIcon>
                <Image
                  src="/assets/newIcons/Icon10.png"
                  alt="Icon 10"
                  width={500}
                  height={500}
                  layout="responsive"
                />
              </ArtIcon>
            </IconWrapper>
          </SectionText>
        </BorderWrap>
      </Section>
      <Section>
        <BorderWrap>
          <SectionText>
            <TextCont>
              <BorderSubtitles>Nurturing local partnerships</BorderSubtitles>
              <Paragraph>
                We&apos;ve collaborated and developed partnerships with a range of
                organisations including local charities, social enterprise,
                family businesses, art organisations and co-operatives.
              </Paragraph>
            </TextCont>
            <IconWrapper $right={true}>
              <ArtIcon>
                <Image
                  src="/assets/newIcons/Icon5.png"
                  alt="Icon 5"
                  width={500}
                  height={500}
                  layout="responsive"
                />
              </ArtIcon>
            </IconWrapper>
          </SectionText>
        </BorderWrap>
      </Section>
      <Section>
        <BorderSubtitles>Impact reports</BorderSubtitles>{" "}
        <Paragraph>
          If you&apos;d like to read about our club&apos;s impact in more detail, you can
          download our impact report below:
          <Paragraph>
            <ArtLink
              href="/impactReports/Allie2021_2023_Impact_Report.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              September 2021 - 2023 impact report.
            </ArtLink>
          </Paragraph>
        </Paragraph>
      </Section>
    </Article>
  );
};

export default AlliesImpact;
