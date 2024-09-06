"use client";
import styled from "styled-components";
import { Form, Field, FieldArray } from "formik";
import { theme } from "./theme/theme.js";
//Main
const Container = styled.main`
  margin: 40px auto 4rem auto;

  min-height: calc(100vh - 4rem - 291px);
  @media (min-width: 768px) {
    min-height: calc(100vh - 4rem - 488px);
  }
  @media (min-width: 1300px) {
    min-height: calc(100vh - 494.83px);
  }
`;

//Headings
const HeadingMain = styled.h1`
  font-family: var(--font-nick-ainley);
  font-size: 5rem;
`;
const SubHeading = styled.h2`
  clear: ${(props) => (props.$clear ? "left" : "auto")};
  font-family: var(--font-arial-nova-cond-bold);
`;
const SubTitle = styled.h2`
  width: ${(props) => (props.$image ? "80%" : "auto")};
  font-family: var(--font-arial-nova-cond-bold);
  font-weight: 800;
  font-size: 2.5rem @media (min-width: 320px) {
    font-size: 3rem;
  }
  @media (min-width: 421px) {
    font-size: 4rem;
  }
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1025px) {
    font-size: 3rem;
  }
  @media (min-width: 1300px) {
    font-size: 3.5rem;
  }
  margin: 0;
`;

const HomepageSubtitles = styled(SubTitle)`
  text-align: left;
  font-size: 2rem;
  @media (min-width: 320px) {
    font-size: 2rem;
  }

  @media (min-width: 1025px) {
    font-size: 3rem;
  }
  @media (min-width: 1300px) {
    font-size: 3.5rem;
  }
`;

const GridSubtitles = styled(SubTitle)`
  font-family: var(--font-arial-nova-cond-bold);
  text-align: center;
  text-shadow: 4px 2px 0px rgba(0, 0, 0, 0.3);

  font-size: 2.5rem @media (min-width: 320px) {
    font-size: 3rem;
  }
  @media (min-width: 421px) {
    font-size: 1rem;
  }
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1025px) {
    font-size: 2rem;
  }
  @media (min-width: 1300px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1920px) {
    font-size: 3rem;
  }
  margin: 0;
`;

//Page Navigation
const PageNavWrap = styled.nav``;
const PageNavList = styled.ul``;
const PageNavItem = styled.li``;
//Main page elements
const Section = styled.section`
  padding: 1rem 20px;
  margin: 1rem 0 1.5rem;
  #conclusion {
    margin-top: 200px;
  }
`;

const SubSection = styled.div``;
const Paragraph = styled.p`
  font-size: 2rem;
`;

const PageDescription = styled(Paragraph)`
  text-align: center;
  margin: 0.5rem 2rem;
`;
const DatePickWrap = styled.div`
  position: relative;
  height: 50px;
  margin-top: 50px;
  border: 4px solid ${(props) => (props.$error ? "red" : "black")};
  width: 100%;
  @media (min-width: 421px) {
    width: 30%;
    min-width: 200px;
  }
`;
const FormStyled = styled(Form)`
  .react-datepicker-wrapper {
    height: 100%;
    width: 100%;
    .react-datepicker__input-container {
      height: 50px;
      width: 100%;
      input {
        height: 42px;
        line-height: 42px;
        padding: 0px 20px;
        width: 100%;
        border: none;
        @media (min-width: 768px) {
          width: 100%;
        }
      }
    }
  }
`;
const FormCheckboxWrapper = styled.fieldset`
  border: none;
  margin-top: 15px;
f
  display: ${(props) => (props.$longList ? "flex" : "block")};
  flex-wrap: ${(props) => (props.$longList ? "wrap" : "no-wrap")};
`;
const FormInputWrapper = styled.div`
  position:relative;
  height:${(props) => (props.$textarea ? "auto" : "50px")};
  transform:translateY(${(props) =>
    props.$oneLine && props.$other ? "-20px" : "0"});
  margin-top:${(props) => (props.$other ? "0px" : "50px")};

  margin-bottom:${(props) => (props.$textarea ? "30px" : "auto")};
  border: 4px solid ${(props) => (props.$error ? "red" : "black")};
  padding: 0px 20px;
  @media(min-width: 768px){
    width: ${(props) => (props.$textarea ? "100%" : "50%")};
  }
  }
`;
const FormLabel = styled.label`
  position: absolute;
  color: ${(props) => (props.$invisible ? "rgba(0,0,0,0)" : "auto")};
  top: -32px;
  left: 10px;
  @media (max-width: 420px) {
    left: 10px;
    font-size: 12px;
    line-height: 12px;
  }
`;
const FormInput = styled(Field)`
  height: 40px;
  line-height: 40px;
  width: 100%;
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
`;
const FormInputCheckboxWrapper = styled.div`
  position: relative;
  border: 1px solid ${theme.pink};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-bottom: 30px;
`;
const FormInputCheckbox = styled(Field)`
  content: " ";
  display: inline-table;
  min-width: 10px;
  min-height: 10px;
  background-clip: content-box;
  margin: 0;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  appearance: none;
  border-radius: 50%;
  &:checked {
    background: ${theme.pink};
  }
  &::after {
    content: "";
    display: inline-block;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0;
    transform: translate(-50%, -50%);
  }
  z-index: 10;
`;
const CheckboxLabel = styled.label`
  position: relative;
  left: 40px;
  display: block;
  width: 200px;
  @media (min-width: 320px) {
    width: 90px;
  }
  @media (min-width: 421px) {
    width: 135px;
  }
  @media (min-width: 768px) {
    width: 170px;
  }

  @media (min-width: 924px) {
    width: 135px;
  }
  @media (min-width: 1025px) {
    width: 160px;
  }
  @media (min-width: 1300px) {
    width: 220px;
  }
  white-space: ${(props) => (props.$longList ? "break-spaces" : "nowrap")};
`;
const FormInputValidation = styled.p`
  color: red;
  position: relative;
  top: -7px;
  left: -10px;
  padding-left: ${(props) => (props.$dob ? "20px" : "0")};
  @media (min-width: 1300px) {
    top: -15px;
  }
`;
const FormTextArea = styled.textarea`
  width: 100%;
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
`;
const FieldSet = styled(FieldArray)`
  border: none;
`;
const FieldSetWrap = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  @media (min-width: 320px) {
    width: ${(props) => (props.$longList ? "50%" : "auto")};
  }
  @media (min-width: 924px) {
    width: ${(props) => (props.$longList ? "33%" : "auto")};
  }
  align-items: center;
  margin: 5px 0;
`;
const RadioWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const RadioInputWrap = styled.div`
  position: relative;
  border: 1px solid blue;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
const FormRadio = styled(Field)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  margin: auto;
  border-radius: 50%;
  appearance: none;
  &:checked {
    background: ${theme.pink};
  }
  &::after {
    content: "";
    display: inline-block;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0;
    transform: translate(-50%, -50%);
  }
`;
const RadioLabel = styled.label`
  line-height: 38px;
  height: 38px;
`;
const FormSelect = styled.select``;
const FormSelectOption = styled.option``;
const FormSubmit = styled.button`
  height: auto;
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;
  position: relative;
  right: 0;
  width: 50%;
`;
const FormSubmitFigure = styled.figure`
  margin: 0;
`;
const FormSubmitImage = styled.img`
  width: 100%;
`;
const FormSubmitCaption = styled.figcaption`
  position: absolute;
  top: 50%;
  right: 38%;
  width: 70%;
  font-size: 1.7rem;
  @media (min-width: 320px) {
    font-size: 2.4rem;
  }
  @media (min-width: 768px) {
    font-size: 2.1rem;
  }
  @media (min-width: 1024px) {
    font-size: 3.1rem;
  }
  @media (min-width: 1300px) {
    font-size: 3.1rem;
  }
  transform-box: "content-box" !important;
  transform: translate(40%, -50%);
  font-family: var(--font-big-stem);
  text-transform: uppercase;
  color: ${theme.pink};
`;
const FormSubmitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const SubmitInfo = styled.div`
  width: 60%;
  p {
    font-size: 0.8rem;
    margin-right: 30px;
    margin-bottom: 0;
    margin-top: 35%;
  }
`;
const StarImg = styled.img`
  width: 25%;
`;
const ErrorMessage = styled.p`
  color: red;
`;
const ErrorWrapper = styled.div`
  height: 50px;
  margin-top: 20px;
`;
const Image = styled.img`  //this is not for articles pictures
  position:relative;
  margin-left:${(props) => (props.$flex ? "auto" : "76%")};
  display:block;
  width:${(props) => (props.$flex ? "30" : "15")}%;
  height:${(props) => (props.$flex ? "30%" : "auto")};
  @media(min-width:768px){  
    margin-left:${(props) => (props.$flex ? "auto" : "calc(85% + 40px)")};
    width:${(props) => (props.$flex ? "24" : "15")}%;Image
    height:${(props) => (props.$flex ? "20%" : "auto")};

  }
`;
const ImageWrapper = styled.div`
  display: flex;
`;
const Floater = styled.div`
  width: 85%;
  float: ${(props) => (props.$right ? "auto" : "right")};
`;
const Link = styled.a`
  color: ${theme.pink};
  &:hover {
    color: ${theme.blue};
  }
  text-decoration: none;
`;


const LinkGrid = styled(Link)`
 color: Black;
  &:hover {
    color:${theme.pink};
  }
  text-decoration: none;
`;


const List = styled.ul``;
const ListElement = styled.li``;

const TextImage = styled.img`
  //this is for articles pictures & used in homepage
  border-radius: 50%;
  width: 80%;
  display: block;
  margin: 0;
  shape-outside: circle();
  @media (min-width: 421px) {
    width: 60%;
  }
  @media (min-width: 768px) {
    margin: 1rem;
    margin-right: ${(props) => (props.$right ? "-1.5rem" : "5rem")};
    margin-left: ${(props) => (props.$right ? "5rem" : "-1.5rem")};
    margin-top: -0.1rem;
    float: ${(props) => (props.$right ? "right" : "left")};
    width: 30rem;
  }
`;
const TextImageFigure = styled.figure`
  position: relative;
  border-radius: 50%;
  width: 80%;
  display: block;
  margin: auto;
  shape-outside: ellipse() padding-box;
  padding: 0.5rem;
  padding-right: 1rem;
  padding-bottom: 2rem;
  @media (min-width: 421px) {
    width: 60%;
  }
  @media (min-width: 768px) {
    margin-right: ${(props) => (props.$right ? "-1.5rem" : "1rem")};
    margin-left: ${(props) => (props.$right ? "1rem" : "-1.5rem")};
    margin-top: -0.1rem;
    float: ${(props) => (props.$right ? "right" : "left")};
    width: 45%;
  }
`;

const TextImageImage = styled.img`
  width: 100%;
  border-radius: 50%;
  shape-outside: circle();
`;
const TextImageCaption = styled.figcaption`
  position: absolute;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
`;
const TextImageTop = styled(TextImage)`
  display: ${(props) => (props.$mobile ? "block" : "none")};

  @media (min-width: 768px) {
    display: ${(props) => (props.$mobile ? "none" : "block")};
  }
`;
const TextImageSquareTop = styled(TextImageTop)`
  border-radius: 0;
  shape-outside: none;
`;
const TextImageSquareCentre = styled(TextImageTop)`
  border-radius: 0;
  shape-outside: none;
  margin: auto;
  float: none;
  display: block;
`;
const Article = styled.article`
  #alliesMission {
    margin-bottom: 2rem;
    @media (min-width: 768px) {
      margin-bottom: 3rem;
    }
  }
`;
const Icon = styled.img`
  display: inline-block;
  width: 1rem;
`;
const InlineIcon = styled.img`
  width: 1.09rem;
  height: 1rem;
  display: inline-block;
  transform: translateY(20%);
`;
const Quote = styled.p`
  color: ${theme.pink};
  font-size: ${(props) => (props.$enlarge ? "1.2rem" : "1rem")};
  text-align: center;
  padding-bottom: 1rem;
`;
const ImageWrap = styled.div`
  width: 50%;
  display: inline-flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
`;

export {
  Container,
  HeadingMain,
  SubHeading,
  PageNavWrap,
  PageNavList,
  PageNavItem,
  Section,
  SubSection,
  Paragraph,
  PageDescription,
  DatePickWrap,
  FormStyled,
  FormCheckboxWrapper,
  FormInputWrapper,
  RadioWrap,
  RadioInputWrap,
  FormRadio,
  RadioLabel,
  CheckboxLabel,
  FormLabel,
  FormInput,
  FormInputCheckbox,
  FormInputCheckboxWrapper,
  FormInputValidation,
  FormTextArea,
  FormSubmit,
  FieldSet,
  FieldSetWrap,
  FormSelect,
  FormSelectOption,
  FormSubmitFigure,
  FormSubmitCaption,
  FormSubmitImage,
  ErrorMessage,
  ErrorWrapper,
  FormSubmitWrapper,
  StarImg,
  SubmitInfo,
  Image,
  ImageWrapper,
  Floater,
  Link,
  List,
  ListElement,
  TextImage,
  TextImageTop,
  TextImageSquareTop,
  TextImageSquareCentre,
  TextImageFigure,
  TextImageImage,
  TextImageCaption,
  Article,
  Icon,
  InlineIcon,
  Quote,
  SubTitle,
  HomepageSubtitles,
  ImageWrap,
  GridSubtitles,
  LinkGrid,
};
