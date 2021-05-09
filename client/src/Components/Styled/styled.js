import styled from 'styled-components';
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
const Form= styled.form`

`
const FormInputWrapper=styled.div`
  height:${props=>props.textarea===true?'auto':'50px'};
  padding-top:20px;
`
const FormLabel=styled.label`
  display:block;
`
const FormInput =styled.input`
width:100%;
border: 4px solid black;
height: 25px;
line-height:25px;
@media(min-width: 768px){
  width: 50%;
}
`
const FormTextArea = styled.textarea`
  width:100%;
  border:4px solid black;
`
const FormSubmit = styled.button`

`

export {Container,HeadingMain,SubHeading,PageNavWrap,PageNavList,PageNavItem,Section,SubSection,Paragraph,Form,FormInputWrapper,FormLabel,FormInput,FormTextArea,FormSubmit};