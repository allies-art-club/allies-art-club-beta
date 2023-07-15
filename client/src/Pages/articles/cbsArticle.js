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

const CbsArticle = () => {
  return (
    <Fragment>
      <Section>
        <TitleBanner
          sideSrc1={"/assets/general/starsL.png"}
          sideSrc2={"/assets/general/starsR.png"}
          centreSrc={"/assets/general/curvedLine.png"}
          title={"We’re a Community Benefit Society!"}
        />
        <picture>
          <source
            media="(max-width: 1024px)"
            srcSet="/assets/articles/communityBenefitSociety/communityBenefitSociety1-small.png 1x, /assets/articles/communityBenefitSociety1/communityBenefitSociety1-large.png 2x"
          />
          <source
            media="(min-width: 1025px)"
            srcSet="/assets/articles/communityBenefitSociety/communityBenefitSociety1-2x.png"
          />
          <TextImageTop
            right={true}
            src={
              "/assets/articles/communityBenefitSociety/communityBenefitSociety1-large.png"
            }
            alt="Poster picture"
          />
        </picture>
        <Paragraph>
          Allie’s Art Club are thrilled to announce that we are now a registered
          Community Benefit Society! After almost two years of developing the
          club and organising a number of events and projects, we decided to
          incorporate as a Community Benefit Society as this will enable us to
          go further as a grassroots organisation made by the people, for the
          people.
        </Paragraph>{" "}
      </Section>
      <Section>
        <Paragraph>
          <b>What is a CBS?</b> <br/>
          A Community Benefit Society (CBS) is a co-operative
          organisation which exists to benefit the community. They are
          not-for-profit and are owned and led by the community they serve.
        </Paragraph>
      </Section>
      <Section>
        <Paragraph>
          As a co-operative organisation, CBSs are owned and controlled by their
          members to meet their shared needs. Members include those who work for
          the organisation and people from the community, who each get a say on
          how the CBS is run and what it provides.{" "}
        </Paragraph>

        <Paragraph>All co-ops are based on the below 10 values:</Paragraph>
        <ArticleList>
          <ListElement>Caring for others</ListElement>
          <ListElement>Democracy</ListElement>
          <ListElement>Equity</ListElement>
          <ListElement>Equality </ListElement>
          <ListElement>Honesty</ListElement>
          <ListElement>Openness </ListElement>
          <ListElement>Self-help</ListElement>
          <ListElement>Self-responsibility </ListElement>
          <ListElement>Solidarity </ListElement>
          <ListElement>Social responsibility </ListElement>
        </ArticleList>
        <Paragraph>
          A CBS promotes all these important values and is the perfect structure
          for Allie’s Art Club to continue our work as a grassroots organisation
          championing local artists and communities!
        </Paragraph>
      </Section>
      <Section>
        <Paragraph><b>Want to become a member?</b><br/></Paragraph>
        <Paragraph>
          Allie’s Art Club is at a very early stage of our co-operative journey,
          so at the moment we’re developing a membership offer that will suit
          local artists and people. That means we need to hear from YOU!{" "}
          <Paragraph>
            Are you an artist or someone who loves the arts? Want to show your
            interest in joining our co-op or have your say on what our co-op
            provides?{" "}
            Please fill out the quick survey below by scanning the QR code or clicking on the{" "}
            <Link
            rel="noopener"
            target="_blank"
            href="https://www.surveymonkey.co.uk/r/9G6ZC39"
          >
            link!
          </Link>
          </Paragraph>
        </Paragraph>
      </Section>
      <img src="/assets/articles/communityBenefitSociety/communityBenefitSociety2-small.png" alt="React Image" />
    </Fragment>
  );
};

export default CbsArticle;
