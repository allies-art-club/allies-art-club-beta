import styled from 'styled-components';
import {Form,Field,FieldArray} from 'formik';
//Main
const Container = styled.main`
  margin:auto;
  min-height: calc(100vh - 120px - 0.5*100vw*0.5627329192546584 - 37px);
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

`
const SubSection = styled.div`

`
const Paragraph = styled.p`

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

export {Container,HeadingMain,SubHeading,PageNavWrap,PageNavList,PageNavItem,Section,SubSection,Paragraph,FormStyled,FormCheckboxWrapper,FormInputWrapper,CheckboxLabel,FormLabel,FormInput,FormInputValidation,FormTextArea,FormSubmit,FieldSet,FieldSetWrap,FormSubmitFigure,FormSubmitCaption,FormSubmitImage,ErrorMessage,ErrorWrapper,FormSubmitWrapper,StarImg,SubmitInfo};