import React from 'react';
import {connect} from 'react-redux';
import {Paragraph, Form,FormInputWrapper,FormLabel,FormInput,FormTextArea,FormSubmit} from '../Components/Styled/styled';
import TitleBanner from '../Components/titleBanner/titleBanner.js';
import {handleSubmit,handleChange} from '../Actions/donateActions';

//handleChange will use the name parameter
const Donate = (props) => {
    return(
        <>
        <TitleBanner sideSrc1={"../../assets/donateBanner/sideSrc2.png"} sideSrc2={"../../assets/donateBanner/sideSrc2.png"} centreSrc={"../../assets/donateBanner/centreSrc.png"}></TitleBanner>
        <Paragraph>Please fill in your details into the form below to make a direct payment to Allie's Art Club</Paragraph>
        <Form onSubmit={(event)=>props.handleSubmit(event,props.donate)}>
            <FormInputWrapper>
                <FormLabel htmlFor="name">Full Name:*</FormLabel>
                <FormInput type="text" name="name" id="name" onChange={(event)=>props.handleChange(event.target)} value={props.donate.name}></FormInput>
            </FormInputWrapper>
            <FormInputWrapper>
                <FormLabel htmlFor="email">Email:*</FormLabel>
                <FormInput type="email" name="email" id="email" onChange={(event)=>props.handleChange(event.target)} value={props.donate.email}></FormInput>
            </FormInputWrapper>
            <FormInputWrapper>
                <FormLabel htmlFor="organisation">Organisation (if applicable):</FormLabel>
                <FormInput type="text" name="organisation" id="organisation" onChange={(event)=>props.handleChange(event.target)} value={props.donate.organisation}></FormInput>
            </FormInputWrapper>
            <FormInputWrapper>
                <FormLabel htmlFor="donationAmount">Amount to pay:*</FormLabel>
                <FormInput type="number" name="donationAmount" id="donationAmount"onChange={(event)=>props.handleChange(event.target)} value={props.donate.donationAmount}></FormInput>
            </FormInputWrapper>
            <FormInputWrapper>
                <FormLabel htmlFor="cardType">Card type:*</FormLabel>
                <FormInput type="text" name="cardType" id="cardType" onChange={(event)=>props.handleChange(event.target)} value={props.donate.cardType}></FormInput>
            </FormInputWrapper>
            <FormInputWrapper>
                <FormLabel htmlFor="cardName">Cardholder name:*</FormLabel>
                <FormInput type="text" name="cardName" id="cardName" onChange={(event)=>props.handleChange(event.target)} value={props.donate.cardName}></FormInput>
            </FormInputWrapper>
            <FormInputWrapper>
                <FormLabel htmlFor="cardNumber">Card number:*</FormLabel>
                <FormInput type="tel" name="cardNumber" id="cardNumber" onChange={(event)=>props.handleChange(event.target)} value={props.donate.cardNumber}></FormInput>
            </FormInputWrapper>
            <FormInputWrapper>
                <FormLabel htmlFor="cardExpiration">Card Expiration:*</FormLabel>
                <FormInput type="text" name="cardExpiration" id="cardExpiration" onChange={(event)=>props.handleChange(event.target)} value={props.donate.cardExpiration}></FormInput>
            </FormInputWrapper>
            <FormInputWrapper>
                <FormLabel htmlFor="cardCvv">CVV:*</FormLabel>
                <FormInput type="tel" name="cardCvv" id="cardCvv" onChange={(event)=>props.handleChange(event.target)} value={props.donate.cardCvv}></FormInput>
            </FormInputWrapper>
            <FormInputWrapper textarea={true}>
                <FormLabel htmlFor="message">Message / note for Allie's Art Club:</FormLabel>
                <FormTextArea rows="5" name="message" id="messages" onChange={(event)=>props.handleChange(event.target)} value={props.donate.message}></FormTextArea>
            </FormInputWrapper>
            <FormInputWrapper>
                <FormSubmit type="submit" value="Submit">Submit</FormSubmit>
            </FormInputWrapper>
        </Form>
        <Paragraph>Please note: all of your information will be kept private, and we will NOT share any of this with other parties</Paragraph>
        </>
    )
}

const mapStateToProps=(state)=>{
    return {
        donate: state.donate
        
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        handleSubmit: (event,donation)=>handleSubmit(event,donation,dispatch),
        handleChange: (name)=>handleChange(name,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Donate);