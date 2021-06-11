import styled from 'styled-components';
import {Form,Field,FieldArray} from 'formik';
//Main
const Container = styled.main`
  margin:auto;
  min-height: calc(100vh - 120px - 0.5*100vw*0.5627329192546584 - 37px);

  @media(min-width:768px){
    min-height: calc(100vh - 342.828px - 170px - 80px);
  }
`
//Headings
const HeadingMain = styled.h1`

`
const SubHeading = styled.h2`

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
  font-size: 1.2rem;
`
const FormStyled= styled(Form)`

`
const FormCheckboxWrapper=styled.fieldset`

`
const FormInputWrapper=styled.div`
  position:relative;
  height:${props=>props.textarea===true?'auto':'50px'};
  margin-top:50px;
  border: 4px solid black;
  padding: 0px 20px;
  @media(min-width: 768px){
    width: 50%;
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
const CheckboxLabel=styled.label`
  
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
  
`
const FieldSetWrap = styled.div`
  position:relative;
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
  width:10%;
  float:${props=>props.right?"right":"left"};
`
const Link = styled.a`
    color:pink;
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
export {Container,HeadingMain,SubHeading,PageNavWrap,PageNavList,PageNavItem,Section,SubSection,Paragraph,FormStyled,FormCheckboxWrapper,FormInputWrapper,CheckboxLabel,FormLabel,FormInput,FormInputValidation,FormTextArea,FormSubmit,FieldSet,FieldSetWrap,FormSelect,FormSelectOption,FormSubmitFigure,FormSubmitCaption,FormSubmitImage,ErrorMessage,ErrorWrapper,FormSubmitWrapper,StarImg,SubmitInfo,Image,Link,List,ListElement,TextImage,Article,Icon,Quote};