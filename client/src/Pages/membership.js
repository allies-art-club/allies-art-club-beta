import React,{Fragment} from 'react';
import {useHistory} from 'react-router-dom';
import TitleBanner from '../Components/titleBanner/titleBanner.js';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Paragraph, FormCheckboxWrapper,FormInput,FormInputCheckbox,FormInputCheckboxWrapper,FormInputWrapper,FormLabel,RadioWrap,RadioInputWrap,FormRadio,RadioLabel,FieldSet,FieldSetWrap,CheckboxLabel,DatePickWrap,FormStyled,FormInputValidation,FormSubmitWrapper,SubmitInfo,StarImg,FormSubmit,FormSubmitCaption,FormSubmitFigure,FormSubmitImage,ErrorWrapper,ErrorMessage} from '../Components/Styled/styled.js';
import {toggleSpinner} from '../Actions/appActions';
import {handleSubmitMember,handleError} from '../Actions/beAnAllieActions';
import {connect} from 'react-redux';
import DatePickerComponent from '../Components/datepicker.js';

const Membership = (props)=>{
    const history = useHistory();
    const MembershipSchema = yup.object().shape({
        name: yup.string().max(70,'Please enter a name of 50 or less characters').required('Required'),
        email: yup.string().email('Invalid email').required('Required'),
        dob: yup.date().required('Required').nullable()
    })
    const opportunities = ["Art classes and events","Self-care and wellness projects","Volunteering and community projects","Networking groups and social events","Club news and discussions updates","Other (Please describe)"]
    const art = ["Drawing","Film","Music","Fashion","Creative writing","Painting","Photography","Theatre","Textiles","Poetry","Graphic design","Digital design","Dance","Pottery","Calligraphy","Other (Please describe)"]
    return(
        <Fragment>
            <TitleBanner
                shootingStar={true}
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
                    dob:"",
                    opportunities: [],
                    art: [],
                    receiveEmail: "Yes",
                    opportunitiesOther: "",
                    artOther: "",
                }}
                validationSchema={MembershipSchema}
                onSubmit={async(values,formik)=>{
                    try{
                        formik.setSubmitting(true);
                        await props.toggleSpinner();
                        await props.handleSubmitMember(values,props.csrf);
                        console.log('yo');
                        await props.toggleSpinner();
                        formik.setSubmitting(false);
                        await props.handleError('member',"");
                        history.push('/thank-you');
                    }
                    catch(e){
                        formik.setSubmitting(false);
                        console.log('yeee')
                        await props.toggleSpinner();
                        await props.handleError("member","Form submission failed. We are working to fix this. Please try again later!");
                        console.log(e);
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
                console.log(values);
                console.log(errors)
                event.preventDefault();
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
                <DatePickWrap>
                    <FormLabel htmlFor="dob">Date of Birth:*</FormLabel>
                    <DatePickerComponent  name={"dob"} value={values.dob}/>
                    {
                    errors.dob && touched.dob ?(
                    <FormInputValidation dob={"true"}>{errors.dob}</FormInputValidation>
                    ): null
                    }

                </DatePickWrap>
                <br/>
                <FormCheckboxWrapper>

                    <legend>What opportunities are you interested in?: (check all that apply):</legend>
                        <FieldSet role="group" aria-labelledBy="opportunities-checkbox-group">
                            <Fragment>
                            { (opportunities && opportunities.length)?
                                opportunities.map((el,i)=>

                                    <FieldSetWrap key={i}>
                                        <FormInputCheckboxWrapper>
                                            <FormInputCheckbox id={el.match('Other')?el.split(' ').join('')+i:el.split(' ').join('')} type="checkbox" name={"opportunities"} onChange={(event)=>{
                                                    console.log(
                                                        errors
                                                    )
                                                    const checked = event.target.checked;
                                                    console.log(checked);
                                                    const valueArray = [...values.opportunities]||[];
                                                    console.log(valueArray);
                                                    if (checked) {
                                                        valueArray.push(event.target.value);
                                                    } else {
                                                        valueArray.splice(valueArray.indexOf(event.target.value), 1);
                                                    }
                                                    console.log(handleChange.toString())
                                                    values.opportunities=[...valueArray]||[];
                                                    event.target.blur()
                                                }} value={el}/>
                                            <CheckboxLabel htmlFor={el.match('Other')?el.split(' ').join('')+i:el.split(' ').join('')}>{el}</CheckboxLabel>
                                        </FormInputCheckboxWrapper>

                                    </FieldSetWrap>

                                ):null
                            }
                            </Fragment>
                        </FieldSet>

                        {
                            errors.opportunities && touched.opportunities ?(
                                <FormInputValidation>{errors.opportunities}</FormInputValidation>
                            ): null
                        }
                    </FormCheckboxWrapper>
                    
                    <FormInputWrapper other={true}>
                        <FormLabel invisible={"true"} htmlFor="opportunitiesOther">Opportunities Other:*</FormLabel>
                        <FormInput type="text" name="opportunitiesOther" id="opportunitiesOther" onChange={handleChange} onBlur={handleBlur} value={values.opportunitiesOther}></FormInput>
                        {
                        errors.opportunitiesOther && touched.opportunitiesOther ?(
                        <FormInputValidation>{errors.opportunitiesOther}</FormInputValidation>
                        ): null
                        }
                    </FormInputWrapper>
                    <br/>
                    <FormCheckboxWrapper longList={true}>
                        <FieldSet  role="group" aria-labelledBy="checkbox-group">
                            <Fragment>

                            <legend style={{"border":"none"}} >Which forms of art interest you?: (tick all that apply)</legend>
                            { (art && art.length)?
                                art.map((el,i)=>

                                    <FieldSetWrap longList={true}key={i}>
                                        <FormInputCheckboxWrapper>
                                            <FormInputCheckbox id={el.match('Other')?el.split(' ').join('')+i:el.split(' ').join('')}type="checkbox" name={"art"} onChange={(event)=>{
                                                    console.log(errors);
                                                    const checked = event.target.checked;
                                                    console.log(checked);
                                                    const valueArray = [...values.art]||[];
                                                    console.log(valueArray);
                                                    if (checked) {
                                                        event.target.checked=true;
                                                        valueArray.push(event.target.value);
                                                    } else {
                                                        event.target.checked=false;
                                                        valueArray.splice(valueArray.indexOf(event.target.value), 1);
                                                    }
                                                    values.art=[...valueArray]||[];
                                                    event.target.blur();
                                                    console.log(event.target.checked);
                                                }} value={el}></FormInputCheckbox>

                                            <CheckboxLabel longList={"true"}htmlFor={el.match('Other')?el.split(' ').join('')+i:el.split(' ').join('')}>{el}</CheckboxLabel>
                                        </FormInputCheckboxWrapper>
                                    </FieldSetWrap>

                                ):null
                            }
                            </Fragment>
                        </FieldSet>

                        {
                            errors.art && touched.art ?(
                                <FormInputValidation>{errors.art}</FormInputValidation>
                            ): null
                        }
                    </FormCheckboxWrapper>
                    
                    <FormInputWrapper other={true}>
                        <FormLabel invisible={"true"} htmlFor="artOther">Art Other:*</FormLabel>
                        <FormInput type="text" name="artOther" id="artOther" onChange={handleChange} onBlur={handleBlur} value={values.artOther}></FormInput>
                        {
                        errors.artOther && touched.artOther ?(
                        <FormInputValidation>{errors.artOther}</FormInputValidation>
                        ): null
                        }
                    </FormInputWrapper>
                    <Paragraph>Are you happy to receive news about the club and upcoming events from us via email?</Paragraph>
                        <RadioWrap>
                            <RadioInputWrap>
                                <FormRadio id="yesInput"type="radio" name="receiveEmail" value={"Yes"}/>
                            </RadioInputWrap>
                            <RadioLabel htmlFor="yesInput">Yes</RadioLabel>

                        </RadioWrap>
                        <RadioWrap>
                            <RadioInputWrap>
                                <FormRadio id="noInput" type="radio" name="receiveEmail" value={"No"}/>
                            </RadioInputWrap>
                            <RadioLabel htmlFor="noInput">No</RadioLabel>
                        </RadioWrap>
                <FormSubmitWrapper>
                    <SubmitInfo>
                        <StarImg alt="star" src={"/assets/general/starL.png"}></StarImg>
                        <Paragraph>Please note: all of your information will be kept private and will not be shared with any other party.</Paragraph>
                    </SubmitInfo>
                    <FormSubmit type="submit" value="Submit" disabled={isSubmitting}>
                        <FormSubmitFigure>
                            <FormSubmitImage alt="submit"src={"/assets/donateBanner/Arrow.png"}></FormSubmitImage>
                            <FormSubmitCaption>SIGN UP!</FormSubmitCaption>
                        </FormSubmitFigure>
                    </FormSubmit>
                </FormSubmitWrapper>

                {
                    props.beAnAllie.errorMessage.member?<ErrorWrapper><ErrorMessage>{props.beAnAllie.errorMessage.member}</ErrorMessage></ErrorWrapper>:null
                }
            </FormStyled>
            )}

            </Formik>
        </Fragment>
    )
}
const mapStateToProps=(state)=>{
    return {
        beAnAllie:state.beAnAllie,
        csrf:state.app.token
        
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        toggleSpinner: ()=>toggleSpinner(dispatch),
        handleSubmitMember: (values,csrf)=>handleSubmitMember(values,csrf,dispatch),
        handleError: (page,message)=>handleError(page,message,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Membership);