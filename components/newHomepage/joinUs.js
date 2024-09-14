import React, { Fragment } from "react";
import Image from "next/image";

import { Paragraph } from "../Styled/styled.js";
import {
  ArtLink,
  BorderWrap,
  ArtIcon,
  SectionText,
  BorderSubtitles,
  IconWrapper,
  TextCont,
} from "../Styled/borderParagraph.styled.js";

import "../../app/fonts/arial-nova-cond-bold/stylesheet.css";
import "../../app/fonts/arial-nova-cond/stylesheet.css";

const JoinUs = () => {
  return (
    <Fragment>
      <BorderWrap>
        <SectionText>
          <TextCont>
            <BorderSubtitles>Make art with us</BorderSubtitles>
            <Paragraph>
              Would you like to get involved in our creative explorations and
              practices? We run a number of events and projects where you can
              express yourself through a range of art forms and be part of our
              community.
            </Paragraph>
            <Paragraph>
              See our upcoming events <ArtLink href="/activities/events">here</ArtLink>
            </Paragraph>
          </TextCont>
          <IconWrapper $right={true}>
            <ArtIcon>
              <Image
                src="/assets/newIcons/Icon1.png"
                alt="Icon 1"
                width={500}
                height={500}
                layout="responsive"
              />
            </ArtIcon>
          </IconWrapper>
        </SectionText>
      </BorderWrap>
      <BorderWrap>
        <SectionText>
          <TextCont>
            <BorderSubtitles>Become a member</BorderSubtitles>
            <Paragraph>
              Do you want to help direct our work and have your voice heard?
              We’re introducing a new co-operative community membership for
              those who’d like to be more involved in shaping our organisation.
            </Paragraph>
            <Paragraph>
              Read about our membership offer <ArtLink href="/activities/membership">here</ArtLink>
            </Paragraph>
          </TextCont>
          <IconWrapper $left={true}>
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
      <BorderWrap>
        <SectionText>
          <TextCont>
            <BorderSubtitles>Book our services</BorderSubtitles>
            <Paragraph>
              Would you like our club to support your project, event or
              organisation? You can book us to deliver a range of arts workshops
              and activities that nurture learning, creativity, connection and
              wellbeing.
            </Paragraph>
            <Paragraph>
              Read about and book our services <ArtLink href="/activities/services">here</ArtLink>
            </Paragraph>
          </TextCont>
          <IconWrapper $right={true}>
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
      <BorderWrap>
        <SectionText>
          <TextCont>
            <BorderSubtitles>Resource our work</BorderSubtitles>
            <Paragraph>
              Do you want to help resource our club so we can sustain our work?
              You can support us and our community by donating to our DIY Fund,
              which helps us maintain financial sustainability and autonomy.
            </Paragraph>
            <Paragraph>
              See our upcoming events <ArtLink href="/donate/the-diy-fund">here</ArtLink>
            </Paragraph>
          </TextCont>
          <IconWrapper $left={true}>
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
      <BorderWrap>
        <SectionText>
          <TextCont>
            <BorderSubtitles>Collaborate with us</BorderSubtitles>
            <Paragraph>
              Have an idea for a project you’d like to work with us on? You are
              welcome to contact us about any collaborative projects or other
              ways you’d like to join forces with our club.
            </Paragraph>
            <Paragraph>
              Get in touch with us about your idea{" "}
              <ArtLink href="/contactUs">here</ArtLink>
            </Paragraph>
          </TextCont>
          <IconWrapper $right={true}>
            <ArtIcon>
              <Image
                src="/assets/newIcons/Icon5.png"
                alt="Icon 1"
                width={500}
                height={500}
                layout="responsive"
              />
            </ArtIcon>
          </IconWrapper>
        </SectionText>
      </BorderWrap>
    </Fragment>
  );
};

export default JoinUs;
