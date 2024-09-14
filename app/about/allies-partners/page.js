"use client";
import React from "react";
import Image from "next/image";
import {
  Section,
  Paragraph,
  Article,
} from "../../../components/Styled/styled.js";
import SideNav from "../../../components/sideNav/sideNav.js";
import TitleBanner from "../../../components/titleBanner/titleBanner.js";
import {
  ImageWrap,
  ImagesContainer,
  ImageWrapHeartsL,
  ImageWrapStarsR,
  ImageWrapStarL,
} from "../../../components/Styled/partners.styled.js";
import tagMessageArray from "../../../utils/tagMessageArray.js";
const Partners = () => {
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
        sideSrc1={"/assets/general/starL.png"}
        sideSrc2={"/assets/general/starR.png"}
        title={"Thank you to our Allies!"}
      ></TitleBanner>
      <Section id="alliesPartners">
        <Paragraph>
          As a collaborative organization, we love working with other great
          organisations and are grateful for all the connections, support and
          resources that help us and our community to flourish! We want to
          celebrate and say thank you to all the organisations we’ve partnered
          with, as well as our funders and those that have supported us with
          their expertise and other vital resources.
        </Paragraph>
        <ImagesContainer id="imagesContainer">
          <ImageWrap id="imageWrap">
            <a
              href="https://future.london/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/partnersLogo/partnersLogo1.png"
                alt="Partner Logo 1"
                width={500}
                height={600}
                layout="responsive" // Use layout for responsive images
              />
            </a>
          </ImageWrap>{" "}
          <ImageWrapStarL id="ImageWrapStarL">
            <Image
              src="/assets/general/starL.png"
              alt="Partner Logo 2"
              width={500}
              height={600}
              layout="responsive"
            />
          </ImageWrapStarL>
          <ImageWrap id="imageWrap">
            {" "}
            <a
              href="https://www.london.gov.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/partnersLogo/partnersLogo2.png"
                alt="Partner Logo 2"
                width={500}
                height={600}
                layout="responsive"
              />{" "}
            </a>
          </ImageWrap>
          <ImageWrap id="imageWrap">
            {" "}
            <a
              href="https://www.socialark.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/partnersLogo/partnersLogo3.png"
                alt="Partner Logo 3"
                width={500}
                height={600}
                layout="responsive"
              />{" "}
            </a>
          </ImageWrap>
          <ImageWrap id="imageWrap">
            <a
              href="https://islingtongiving.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/partnersLogo/partnersLogo4.png"
                alt="Partner Logo 4"
                width={500}
                height={600}
                layout="responsive"
              />{" "}
            </a>
          </ImageWrap>
          <ImageWrap id="imageWrap">
            <a
              href="https://www.islington.gov.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/partnersLogo/partnersLogo5.png"
                alt="Partner Logo 5"
                width={500}
                height={600}
                layout="responsive"
              />{" "}
            </a>
          </ImageWrap>
          <ImageWrap id="imageWrap">
            <a
              href="https://www.cubittartists.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/partnersLogo/partnersLogo6.png"
                alt="Partner Logo 6"
                width={500}
                height={600}
                layout="responsive"
              />
            </a>
          </ImageWrap>
          <ImageWrap id="imageWrap">
            <a
              href="https://www.skaped.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/partnersLogo/partnersLogo7.png"
                alt="Partner Logo 7"
                width={500}
                height={600}
                layout="responsive"
              />
            </a>
          </ImageWrap>
          <ImageWrap id="imageWrap">
            <a
              href="https://www.awtf.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/partnersLogo/partnersLogo8.png"
                alt="Partner Logo 8"
                width={500}
                height={600}
                layout="responsive"
              />
            </a>
          </ImageWrap>{" "}
          <ImageWrapHeartsL id="imageWrap">
            <Image
              src="/assets/general/heartsL.png"
              alt="heartsL"
              width={500}
              height={600}
              layout="responsive"
            />
          </ImageWrapHeartsL>
          <ImageWrap id="imageWrap">
            <a
              href="https://www.uk.coop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/partnersLogo/partnersLogo9.png"
                alt="Partner Logo 9"
                width={500}
                height={600}
                layout="responsive"
              />
            </a>
          </ImageWrap>
          <ImageWrap id="imageWrap">
            <a
              href="https://www.powerwith.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/partnersLogo/partnersLogo10.png"
                alt="Partner Logo 10"
                width={500}
                height={600}
                layout="responsive"
              />
            </a>
          </ImageWrap>
          <ImageWrap id="imageWrap">
            <a
              href="https://plunkett.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/partnersLogo/partnersLogo11.png"
                alt="Partner Logo 11"
                width={500}
                height={600}
                layout="responsive"
              />{" "}
            </a>
          </ImageWrap>
          <ImageWrap id="imageWrap">
            <a
              href="https://cripplegate.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/partnersLogo/partnersLogo12.png"
                alt="Partner Logo 12"
                width={500}
                height={600}
                layout="responsive"
              />{" "}
            </a>
          </ImageWrap>{" "}
          <ImageWrapStarsR id="imageWrap">
            <Image
              src="/assets/general/starsR.png"
              alt="Partner Logo 2"
              width={500}
              height={600}
              layout="responsive"
            />
          </ImageWrapStarsR>{" "}
          <ImageWrap id="imageWrap">
            <a
              href="https://piliontrust.info/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/partnersLogo/partnersLogo13.png"
                alt="Partner Logo 13"
                width={500}
                height={600}
                layout="responsive"
              />{" "}
            </a>
          </ImageWrap>
          <ImageWrap id="imageWrap">
            <a
              href="https://space4.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/partnersLogo/partnersLogo14.png"
                alt="Partner Logo 14"
                width={500}
                height={600}
                layout="responsive"
              />{" "}
            </a>
          </ImageWrap>
          <ImageWrap id="imageWrap">
            <a
              href="https://boundlesstheatre.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/partnersLogo/partnersLogo15.png"
                alt="Partner Logo 15"
                width={500}
                height={600}
                layout="responsive"
              />{" "}
            </a>
          </ImageWrap>
        </ImagesContainer>
      </Section>
    </Article>
  );
};

export default Partners;
