"use client";
import React from "react";
import Image from "next/image";
import {
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
  HomepageSubtitles,
  TextImageTop,
  Link,
} from "../../../components/Styled/styled";
import SideNav from "../../../components/sideNav/sideNav.js";
import TitleBanner from "../../../components/titleBanner/titleBanner.js";

const Services = () => {
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
        title={"Services"}
      ></TitleBanner>

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
          We provide bespoke workshops <br />
          and valuable expertise
        </HomepageSubtitles>
        <br />
        <br />
        <Paragraph>
          Would you like our club to support your project, event or
          organisation? You can <Link>get in touch via email</Link> and book a
          free consultation to discuss how we can provide a bespoke service to
          suit your group, project, event or organisation.
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
        </picture>{" "}
      </Section>
      <Section>
        <BorderWrap>
          <SectionText>
            <TextCont>
              <BorderSubtitles>Group art sessions</BorderSubtitles>
              <Paragraph>
                Art is a great activity to encourage group bonding and have fun
                together! We can deliver a range of arts sessions - from
                creative writing to painting - that are tailored to your group,
                event or organisation’s needs.
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
              <BorderSubtitles>Creative health workshops</BorderSubtitles>
              <Paragraph>
                We have a network of skilled and experienced creative health
                practitioners who can facilitate a range of arts workshops that
                support the health and wellbeing of participants from a range of
                backgrounds.
              </Paragraph>
            </TextCont>
            <IconWrapper $right={true}>
              <ArtIcon>
                <Image
                  src="/assets/newIcons/Icon2.png"
                  alt="Icon 2"
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
              <BorderSubtitles>Artistic activism workshops</BorderSubtitles>
              <Paragraph>
                Our organisation was born from the knowledge that art has the
                power to change the world. Our artists can facilitate creative
                workshops on a range of topics to empower participants to create
                positive social change through art.
              </Paragraph>
            </TextCont>
            <IconWrapper $left={true}>
              <ArtIcon>
                <Image
                  src="/assets/newIcons/Icon3.png"
                  alt="Icon 3"
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
              <BorderSubtitles>Public speaking</BorderSubtitles>
              <Paragraph>
                Our organisational leaders have been invited to speak at a range
                of public events, from local arts events to national cooperative
                conferences. We have valuable expertise that can inspire and
                inform diverse audiences.
              </Paragraph>
            </TextCont>
            <IconWrapper $right={true}>
              <ArtIcon>
                <Image
                  src="/assets/newIcons/Icon4.png"
                  alt="Icon 4"
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
              <BorderSubtitles>Consultations</BorderSubtitles>
              <Paragraph>
                We are led by creatives with a range of lived and learnt
                experience and expertise in creative health, community
                engagement, artistic activism and cooperatives, We are led by
                lived experience creatives who can support your project or
                organisation through sharing their valuable expertise in
                creative health, community engagement, artistic activism and
                cooperatives.
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
    </Article>
  );
};

export default Services;
