import React,{Fragment} from 'react';
import TitleBanner from '../Components/titleBanner/titleBanner.js';
import {Formik} from 'formik';
import * as yup from 'yup';import {Paragraph, Link,FormInput,FormInputWrapper,FormLabel,FormTextArea,FormStyled,FormInputValidation,FormSubmitWrapper,SubmitInfo,StarImg,FormSubmit,FormSubmitCaption,FormSubmitFigure,FormSubmitImage,ErrorWrapper,ErrorMessage} from '../Components/Styled/styled.js';
import {toggleSpinner} from '../Actions/donateActions';
import {connect} from 'react-redux';
const Membership = (props)=>{
    const MembershipSchema = yup.object().shape({
        name: yup.string().max(70,'Please enter a name of 50 or less characters').required('Required'),
        email: yup.string().email('Invalid email').required('Required'),
        message: yup.string().max(1000,'Please enter a message less than 1000 characters')
    })
    return(
        <Fragment>
            <TitleBanner
                sideSrc1={'/assets/general/starL.png'}
                sideSrc2={'/assets/general/starR.png'}
                centreSrc={'/assets/general/curvedLine.png'}
                title={'Membership'}
            ></TitleBanner>
            <Paragraph>Want to join our community of creatives and change-makers?</Paragraph>
            <Paragraph>Sign up below to become a member and keep up to date with upcoming projects, events, opportunities and discussions.</Paragraph>
            <Paragraph>By filling out our membership form you also help us know what types of opportunities you are looking for and how we can best serve your needs and interests.</Paragraph>
            <Paragraph>There are no hidden costs to join Allie's Art Club - membership is completely free and you can leave and rejoin any time you like.</Paragraph>
            <Formik
                initialValues= {{
                    name: "",
                    email:"",
                    message:""
                }}
                validationSchema={MembershipSchema}
                onSubmit={async(values,formik)=>{
                    try{
                        formik.setSubmitting(true);
                        await props.toggleSpinner()
                        await props.handleSubmitMembership(values)
                        await props.toggleSpinner();
                        formik.setSubmitting(false);
                    }
                    catch(e){
                        formik.setSubmitting(false);
                        console.log(e)
                    }
                }}
            >{({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                dirty,
                isValid
            })=>(
                
            <FormStyled onSubmit={(event)=>{
                event.preventDefault();
                props.cardValidate(props.donate.card);
                handleSubmit();
                }}>
                <FormInputWrapper>
                    <FormLabel htmlFor="name">Full Name:*</FormLabel>
                    <FormInput type="text" name="name" id="name" onChange={handleChange} onBlur={handleBlur}value={values.name}></FormInput>
                    {
                    errors.name && touched.name ?(
                    <FormInputValidation>{errors.name}</FormInputValidation>
                    ): null
                    }
                </FormInputWrapper>
                <FormInputWrapper>
                    <FormLabel htmlFor="email">Email:*</FormLabel>
                    <FormInput type="email" name="email" id="email" onChange={handleChange} onBlur={handleBlur} value={values.email}></FormInput>
                    {
                    errors.email && touched.email ?(
                    <FormInputValidation>{errors.email}</FormInputValidation>
                    ): null
                    }
                </FormInputWrapper>
                <FormInputWrapper textarea={true}>
                    <FormLabel htmlFor="message">Message / note for Allie's Art Club:</FormLabel>
                    <FormTextArea rows="5" name="message" id="messages" onChange={handleChange} onBlur={handleBlur} value={props.message}></FormTextArea>
                    {
                    errors.message && touched.message ?(
                    <FormInputValidation>{errors.message}</FormInputValidation>
                    ): null
                    }
                </FormInputWrapper>

                <FormSubmitWrapper>
                    <SubmitInfo>
                        <StarImg src={"/assets/general/starL.png"}></StarImg>
                        <Paragraph>Please note: all of your information will be kept private, and we will NOT share any of this with other parties</Paragraph>
                    </SubmitInfo>
                    <FormSubmit type="submit" value="Submit" disabled={isSubmitting}>
                        <FormSubmitFigure>
                            <FormSubmitImage src={"/assets/donateBanner/Arrow.png"}></FormSubmitImage>
                            <FormSubmitCaption>SIGN UP!</FormSubmitCaption>
                        </FormSubmitFigure>
                    </FormSubmit>
                {
                    props.donate.errorMessage?<ErrorWrapper><ErrorMessage>{props.donate.errorMessage}</ErrorMessage></ErrorWrapper>:null
                }
                </FormSubmitWrapper>
            </FormStyled>
            )}

            </Formik>
        </Fragment>
    )
}
const mapStateToProps=(state)=>{
    return {
        donate:state.donate,
        csrf:state.app.token
        
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        toggleSpinner: ()=>toggleSpinner(dispatch),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Membership);