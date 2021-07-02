import styled from 'styled-components';
import {Form,Field,FieldArray} from 'formik';
import {theme} from './theme/theme.js';
//Main
const Container = styled.main`
  margin: 40px auto 4rem auto;

  min-height: calc(100vh - 0.5*100vw*0.5627329192546584 - 148px);
  @media(min-width:421px){
    min-height: calc(100vh - 0.5*100vw*0.5627329192546584 - 148px);
  }
  @media(min-width:768px){
    min-height: calc(100vh  - 464.83px);
  }
  @media(min-width:1300px){
    min-height: calc(100vh  - 494.83px);
  }
`

//Headings
const HeadingMain = styled.h1`

  font-family: nickainley;
`
const SubHeading = styled.h2`
  clear:${props=>props.clear?"left":"auto"};
  font-family: nickainley;
`
const SubTitle=styled.h2`
  width: ${props=>props.image?"80%":"auto"};
  font-family: nickainley;
    font-weight:100;
    font-size: 2.5rem
    @media(min-width:320px){

        font-size: 3rem;
    }
    @media(min-width:421px){

    font-size:4rem;
    }
    @media(min-width: 768px){
        font-size: 2.5rem;
    }
    @media(min-width: 1025px){
        font-size: 3rem;
    }
    @media(min-width:1300px){
        font-size: 3.5rem;
    }
    margin:0;
`
//Page Navigation
const PageNavWrap = styled.nav`

`
const PageNavList = styled.ul`

`
const PageNavItem = styled.li`

`
//Main page elements
const Section = styled.section`
  padding:0 20px;
  margin: 1rem 0;
  #conclusion {
    margin-top:200px;
  }
`
const SubSection = styled.div`

`
const Paragraph = styled.p`
  font-size: 1rem;
`
const PageDescription = styled(Paragraph)`
  text-align: center;
  margin: 0.5rem 2rem;
`
const DatePickWrap = styled.div`
  position:relative;
  height:50px;
  margin-top: 50px;
  border: 4px solid ${props=>props.error?"red":"black"};
  width:100%;
  @media(min-width:421px){
    width:30%;
    min-width:200px;

  }
`
const FormStyled= styled(Form)`
  .react-datepicker-wrapper {
    height:100%;
    width:100%;
    .react-datepicker__input-container{
      height:50px;
      width:100%;
      input {
        height:42px;
        line-height:42px;
        padding: 0px 20px;
        width:100%;
        border:none;
        @media(min-width: 768px){
          width: 100%;
        }

      }
    }
  }

`
const FormCheckboxWrapper=styled.fieldset`
  border:none;
  display:${props=>props.longList?"flex":"block"};
  flex-wrap:${props=>props.longList?"wrap":"no-wrap"};
`
const FormInputWrapper=styled.div`
  position:relative;
  height:${props=>props.textarea===true?'auto':'50px'};
  margin-top:${props=>props.other?"0":"50px"};
  border: 4px solid ${props=>props.error?"red":"black"};
  padding: 0px 20px;
  @media(min-width: 768px){
    width: 50%;
  }

  }
`
const FormLabel=styled.label`
  position:absolute;
  color: ${props=>props.invisible?"rgba(0,0,0,0)":"auto"};
  top: -32px;
  left: 10px;
  @media(max-width:420px){
    left:10px;
    font-size: 12px;
    line-height:12px;
  }
`
const FormInput =styled(Field)`
  height: 40px;
  line-height:40px;
  width:100%;
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
`
const FormInputCheckboxWrapper = styled.div`
  position:relative;
  border: 1px solid blue;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`
const FormInputCheckbox =styled(Field)`
content:" ";
display:inline-table;
  min-width:10px;
  min-height:10px;
  background-clip:content-box;
  margin:0;
  position: absolute;
  transform: translate(-50%,-50%);
  top:50%;
  left:50%;
  appearance:none;
  border-radius:50%;
  &:checked {
    background:${theme.pink};
  }
  &::after{
    content:'';
    display:inline-block;
    width:30px;
    height:30px;
    position:absolute;
    top:50%;
    left:50%;
    margin:0;
    transform:translate(-50%,-50%);
  }
  z-index:10;
  
`
const CheckboxLabel=styled.label` 
  position:relative;
  left:40px;
  display:block;
    white-space:nowrap;
`
const FormInputValidation= styled.p`
  color:red;
  position:relative;
  top: -7px;
  left: -10px;
  padding-left: ${props=>props.dob?"20px":"0"};
  @media(min-width:1300px){
    top: -15px;
  }
`
const FormTextArea = styled.textarea`
  width:100%;
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
`
const FieldSet = styled(FieldArray)`
  border: none;
  
`
const FieldSetWrap = styled.div`
  position:relative;
  display: flex;
  width:100%;
  @media(min-width:320px){
    width:${props=>props.longList?"50%":"auto"};

  }
  @media(min-width:924px){
    width:${props=>props.longList?"33%":"auto"};
  }
  align-items: center;
  margin: 5px 0;
`
const RadioWrap=styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;
`
const RadioInputWrap=styled.div`
position:relative;
border: 1px solid blue;
border-radius: 50%;
width: 30px;
height: 30px;
margin-right:10px;
`
const FormRadio=styled(Field)`
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  width: 8px;
  height: 8px;
  margin:auto;
  border-radius: 50%;
  appearance:none;
  &:checked {
    background:${theme.pink};
  }

`
const RadioLabel=styled.label`
  line-height:38px;
  height:38px;
`
const FormSelect = styled.select`

`
const FormSelectOption= styled.option`

`
const FormSubmit = styled.button`
  height:auto;
  background: none;
  padding:0;
  border: none;
  cursor:pointer;
`
const FormSubmitFigure= styled.figure`
  margin:0;
  position:relative;
`
const FormSubmitImage = styled.img`
  width:100%;
`
const FormSubmitCaption = styled.figcaption`
  position:absolute;
  top:50%;
  right:50%;
  font-size: 2.5rem;
  @media(min-width:320px){
    font-size: 3rem;
  }
  @media(min-width:1024px){
    font-size: 3.5rem;
  }
  transform-box: "content-box" !important;
  transform:translate(40%,-50%);
  font-family: 'Big Shoulders Text',cursive;
  text-transform: uppercase;
  color: ${theme.pink};
`
const FormSubmitWrapper= styled.div`
  display:flex;
  justify-content:space-between;
  align-items: center;
  width:100%;
`
const SubmitInfo = styled.div`
  width:60%;
  p {
    font-size: 0.8rem;
  }
`
const StarImg=styled.img`
  width: 40%;
`
const ErrorMessage = styled.p`
  color:red
`
const ErrorWrapper = styled.div`
  height: 50px;
  margin-top:20px;
`
const Image = styled.img`
  position:relative;
  margin-left:${props=>props.flex?"0":"85%"};
  display:block;
  width:15%;
  height:auto;
`
const ImageWrapper=styled.div`
  display:flex;
`
const Floater=styled.div`
  width:85%;
  float:${props=>props.right?"auto":"right"};
`
const Link = styled.a`
    color:${theme.pink};
    &:hover {
      color: ${theme.blue};
    }
    text-decoration:none;
`
const List=styled.ul`
  
`
const ListElement=styled.li`

`

const TextImage = styled.img`
    border-radius:50%;
    width:80%;
    display:block;
    margin:auto;
    shape-outside: circle();
    @media(min-width:421px){
      width:60%
    }
    @media(min-width:768px){
        margin:1rem;
        float:${props=>props.right?'right':'left'};
        width:40%;
    }
`
const TextImageTop=styled(TextImage)`
    display: ${props=>props.mobile?"block":"none"};
    @media(min-width:768px){
      display: ${props=>props.mobile?"none":"block"};
    }
`
const Article = styled.article`

`
const Icon=styled.img`
    display: inline-block;
    width: 1rem;
`
const InlineIcon = styled.img`
    width:1rem;
    height:1rem;
    display:inline-block;
    transform:translateY(20%);
`
const Quote=styled.p`
    font-color:${theme.pink}
`
const ImageWrap = styled.div`
    width:50%;
    display:inline-flex;
    justify-content: flex-start;
    flex-wrap:nowrap;
`

export {Container,HeadingMain,SubHeading,PageNavWrap,PageNavList,PageNavItem,Section,SubSection,Paragraph,PageDescription,DatePickWrap, FormStyled,FormCheckboxWrapper,FormInputWrapper,RadioWrap,RadioInputWrap,FormRadio,RadioLabel,CheckboxLabel,FormLabel,FormInput,FormInputCheckbox,FormInputCheckboxWrapper,FormInputValidation,FormTextArea,FormSubmit,FieldSet,FieldSetWrap,FormSelect,FormSelectOption,FormSubmitFigure,FormSubmitCaption,FormSubmitImage,ErrorMessage,ErrorWrapper,FormSubmitWrapper,StarImg,SubmitInfo,Image,ImageWrapper,Floater,Link,List,ListElement,TextImage,TextImageTop, Article,Icon,InlineIcon,Quote,SubTitle,ImageWrap};