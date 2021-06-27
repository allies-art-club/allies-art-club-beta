import styled from 'styled-components';
import {Form,Field,FieldArray} from 'formik';
import {theme} from './theme/theme.js';
//Main
const Container = styled.main`
  margin:auto;

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

  font-family: nickainley;
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
`
const SubSection = styled.div`

`
const Paragraph = styled.p`
  font-size: 1rem;
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
  margin-top:50px;
  border: 4px solid ${props=>props.error?"red":"black"};
  padding: 0px 20px;
  @media(min-width: 768px){
    width: 50%;
  }

  }
`
const FormLabel=styled.label`
  position:absolute;
  top: -32px;
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
  display: flex;
  border: 1px solid blue;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`
const FormInputCheckbox =styled(Field)`
  width: 8px;
  height: 8px;
  margin:auto;
  border-radius: 50%;
  appearance:none;
  &:checked {
    background:${theme.pink};
  }
  
`
const CheckboxLabel=styled.label`
  margin-left: 10px;
  word-wrap:break-word;
`
const FormInputValidation= styled.p`
  color:red;
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
  display:${props=>props.longList?"flex":"block"}
  
`
const FieldSetWrap = styled.div`
  position:relative;
  display: flex;
  width:${props=>props.longList?"50%":"auto"};
  @media(min-width:767px){
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
  font-size: 2.2rem;
  transform-box: "content-box" !important;
  transform:translate(40%,-50%);
`
const FormSubmitWrapper= styled.div`
  display:flex;
  justify-content:space-between;
  align-items: center;
  width:100%;
`
const SubmitInfo = styled.div`
  width:60%;
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
  display:block;
  width:15%;
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

    @media(min-width:768px){
        float:${props=>props.right?'right':'left'};
        width:40%;
    }
`
const Article = styled.article`

`
const Icon=styled.img`
    display: inline-block;
    width: 1rem;
`
const Quote=styled.p`
    
`
export {Container,HeadingMain,SubHeading,PageNavWrap,PageNavList,PageNavItem,Section,SubSection,Paragraph,DatePickWrap, FormStyled,FormCheckboxWrapper,FormInputWrapper,RadioWrap,RadioInputWrap,FormRadio,RadioLabel,CheckboxLabel,FormLabel,FormInput,FormInputCheckbox,FormInputCheckboxWrapper,FormInputValidation,FormTextArea,FormSubmit,FieldSet,FieldSetWrap,FormSelect,FormSelectOption,FormSubmitFigure,FormSubmitCaption,FormSubmitImage,ErrorMessage,ErrorWrapper,FormSubmitWrapper,StarImg,SubmitInfo,Image,ImageWrapper,Floater,Link,List,ListElement,TextImage,Article,Icon,Quote};