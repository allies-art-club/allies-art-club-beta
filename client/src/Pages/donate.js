import React from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Paragraph, Form,FormInputWrapper,FormLabel,FormInput,FormTextArea,FormSubmit,ErrorMessage,ErrorWrapper} from '../Components/Styled/styled';
import TitleBanner from '../Components/titleBanner/titleBanner.js';
import {handleSubmit,handleChange, toggleSpinner} from '../Actions/donateActions';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CardInput from '../Components/cardInput';

//handleChange will use the name parameter

const Donate = (props) => {
    const stripe = useStripe();
    const elements = useElements();
    let history = useHistory();
    
    return(
        <>
            <TitleBanner sideSrc1={"../../assets/donateBanner/sideSrc2.png"} sideSrc2={"../../assets/donateBanner/sideSrc2.png"} centreSrc={"../../assets/donateBanner/centreSrc.png"}></TitleBanner>
            <Paragraph>Please fill in your details into the form below to make a direct payment to Allie's Art Club</Paragraph>
            <Form onSubmit={async(event)=>{
                        event.preventDefault();
                        if(stripe && elements&&props.donate.submitActive){
                            await props.toggleSpinner();
                            const result = await props.handleSubmit(props.donate,elements.getElement(CardElement),stripe,props.csrf);
                            await props.toggleSpinner();
                            if(result === true){
                                history.push('/thank-you');
                            }
                        }
                }   
            }>
                <FormInputWrapper>
                    <FormLabel htmlFor="name">Full Name:*</FormLabel>
                    <FormInput type="text" name="name" id="name" onChange={(event)=>props.handleChange(event.target)} value={props.donate.donateObj.name}></FormInput>
                </FormInputWrapper>
                <FormInputWrapper>
                    <FormLabel htmlFor="email">Email:*</FormLabel>
                    <FormInput type="email" name="email" id="email" onChange={(event)=>props.handleChange(event.target)} value={props.donate.donateObj.email}></FormInput>
                </FormInputWrapper>
                <FormInputWrapper>
                    <FormLabel htmlFor="organisation">Organisation (if applicable):</FormLabel>
                    <FormInput type="text" name="organisation" id="organisation" onChange={(event)=>props.handleChange(event.target)} value={props.donate.donateObj.organisation}></FormInput>
                </FormInputWrapper>
                <FormInputWrapper>
                    <FormLabel htmlFor="donationAmount">Amount to pay:*</FormLabel>
                    <FormInput type="number" name="donationAmount" id="donationAmount"onChange={(event)=>props.handleChange(event.target)} value={props.donate.donateObj.donationAmount}></FormInput>
                </FormInputWrapper>
                <FormInputWrapper>
                    <CardInput />
                </FormInputWrapper>
                <FormInputWrapper textarea={true}>
                    <FormLabel htmlFor="message">Message / note for Allie's Art Club:</FormLabel>
                    <FormTextArea rows="5" name="message" id="messages" onChange={(event)=>props.handleChange(event.target)} value={props.donate.donateObj.message}></FormTextArea>
                </FormInputWrapper>

                <FormInputWrapper>
                    <FormSubmit type="submit" value="Submit">Submit</FormSubmit>
                </FormInputWrapper>
                {
                    props.donate.errorMessage?<ErrorWrapper><ErrorMessage>{props.donate.errorMessage}</ErrorMessage></ErrorWrapper>:null
                }
            </Form>
            <Paragraph>Please note: all of your information will be kept private, and we will NOT share any of this with other parties</Paragraph>
        </>
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
        handleSubmit: (donation,element,stripe,csrf)=>handleSubmit(donation,element,stripe, csrf,dispatch),
        handleChange: (name)=>handleChange(name,dispatch),
        toggleSpinner: ()=>toggleSpinner(dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Donate);