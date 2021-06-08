import React,{Fragment} from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Paragraph, FormStyled,FormSubmitWrapper,StarImg,SubmitInfo,FormInputWrapper,FormLabel,FormInput,FormInputValidation,FormTextArea,FormSubmit,FormSubmitImage,FormSubmitCaption,FormSubmitFigure,ErrorMessage,ErrorWrapper} from '../Components/Styled/styled';
import TitleBanner from '../Components/titleBanner/titleBanner.js';
import {handleSubmit, toggleSpinner,handleCardElementChange,cardValidate} from '../Actions/donateActions';
import {useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement} from '@stripe/react-stripe-js';
import {Formik} from 'formik';
import * as yup from 'yup';
//handleChange will use the name parameter

const DonateFunds = (props) => {
    const stripe = useStripe();
    const elements = useElements();
    let history = useHistory();
    const cardOptions = {
        style: {
            base: {
                lineHeight:"40px",
            },
            invalid: {
                color:"red"
            }

        },
    }
    const DonateFundsSchema = yup.object().shape({
        name: yup.string().max(70,'Please enter a name of 50 or less characters').required('Required'),
        email: yup.string().email('Invalid email').required('Required'),
        organisation: yup.string().max(200, "Please enter a name of 200 characters or less"),
        donationAmount: yup.number().required('Required').positive(),
        message: yup.string().max(1000,'Please enter a message less than 1000 characters')
    })
    return(
        <Fragment>
            <TitleBanner sideSrc1={"/assets/general/starsL.png"} sideSrc2={"/assets/general/starsR.png"} centreSrc={"/assets/general/ribbon.png"}></TitleBanner>
            <Paragraph>Please fill in your details into the form below to make a direct payment to Allie's Art Club</Paragraph>
            <Formik
                initialValues={{
                    name:"",
                    email:"",
                    organisation: "",
                    donationAmount: "",
                    message: "",
                }}
                validationSchema={DonateFundsSchema}
                onSubmit={async(values,formik,yes,s,ye,yeeees)=>{
                    formik.setSubmitting(true);
                    if(!props.cardValidate(props.donate.card)){
                        console.log('yes')
                        return
                    }
                    console.log(values,formik,yes,s,ye,yeeees);
                        console.log(formik.validateForm)
                        const validateeee = await formik.validateForm(values)
                        console.log(validateeee)
                        try{
                            if(stripe && elements){
                                await props.toggleSpinner();
                                const result = await props.handleSubmit(values,elements.getElement(CardNumberElement),stripe,props.csrf);
                                await props.toggleSpinner();
                                if(result === true){
                                    formik.setSubmitting(false);
                                    history.push('/thank-you');
                                }
                                else{
                                    throw new Error('failed');
                                }
                            }

                        }
                        catch(e){
                            formik.setSubmitting(false);
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
                <FormInputWrapper>
                    <FormLabel htmlFor="organisation">Organisation (if applicable):</FormLabel>
                    <FormInput type="text" name="organisation" id="organisation" onChange={handleChange} onBlur={handleBlur} value={values.organisation}></FormInput>
                    <ErrorMessage></ErrorMessage>
                    {
                    errors.organisation && touched.organsation ?(
                        <FormInputValidation>{errors.organisation}</FormInputValidation>
                    ): null
                    }
                </FormInputWrapper>
                <FormInputWrapper>
                    <FormLabel htmlFor="donationAmount">Amount to pay:*</FormLabel>
                    <FormInput type="number" name="donationAmount" id="donationAmount" onChange={handleChange} onBlur={handleBlur} value={values.donationAmount}></FormInput>
                    {
                    errors.donationAmount && touched.donationAmount ?(
                    <FormInputValidation>{errors.donationAmount}</FormInputValidation>
                    ): null
                    }
                </FormInputWrapper>
                <FormInputWrapper>
                    <FormLabel htmlFor="cardNumber">Card Number:*</FormLabel>
                    <CardNumberElement id="cardNumber" options={cardOptions} onChange={props.handleCardElementChange} onBlur={props.handleCardElementChange}/>
                    {
                        props.donate.card.cardNumber.errorMessage?
                        <FormInputValidation>{props.donate.card.cardNumber.errorMessage}</FormInputValidation>:
                        null
                    }
                </FormInputWrapper>
                <FormInputWrapper>
                    <FormLabel htmlFor="cardCvc">CVC:*</FormLabel>
                    <CardCvcElement id="cardCvc" options={cardOptions} onChange={props.handleCardElementChange}/>

                    {
                        props.donate.card.cardCvc.errorMessage?
                        <FormInputValidation>{props.donate.card.cardCvc.errorMessage}</FormInputValidation>:
                        null
                    }
                </FormInputWrapper>
                <FormInputWrapper>
                    <FormLabel htmlFor="cardExpiryDate">Expiry Date:*</FormLabel>
                    <CardExpiryElement id="cardExpiryDate" options={cardOptions} onChange={props.handleCardElementChange}/>
                    {
                        props.donate.card.cardExpiry.errorMessage?
                        <FormInputValidation>{props.donate.card.cardExpiry.errorMessage}</FormInputValidation>:
                        null
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
                        <StarImg src={"../../assets/donateBanner/shootingStarSingleL.png"}></StarImg>
                        <Paragraph>Please note: all of your information will be kept private, and we will NOT share any of this with other parties</Paragraph>
                    </SubmitInfo>
                    <FormSubmit type="submit" value="Submit" disabled={isSubmitting}>
                        <FormSubmitFigure>
                            <FormSubmitImage src={"/assets/donateBanner/Arrow.png"}></FormSubmitImage>
                            <FormSubmitCaption>Submit</FormSubmitCaption>
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
        handleCardElementChange: (event)=>handleCardElementChange(event,dispatch),
        handleSubmit: (donation,element,stripe,csrf)=>handleSubmit(donation,element,stripe, csrf,dispatch),
        toggleSpinner: ()=>toggleSpinner(dispatch),
        cardValidate: (card)=>cardValidate(card,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DonateFunds);