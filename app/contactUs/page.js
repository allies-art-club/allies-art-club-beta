"use client";
import React, { Fragment } from "react";
import TitleBanner from "../../components/titleBanner/titleBanner.js";
import {
  Paragraph,
  Link,
  FormInput,
  FormInputWrapper,
  FormLabel,
  FormTextArea,
  FormStyled,
  FormInputValidation,
  FormSubmitWrapper,
  SubmitInfo,
  StarImg,
  FormSubmit,
  FormSubmitCaption,
  FormSubmitImage,
  ErrorWrapper,
  ErrorMessage,
} from "../../components/Styled/styled.js";

import { Button } from "../../components/Styled/contact.styled.js";
import * as yup from "yup";

import { Formik } from "formik";
import { toggleSpinner } from "../../utils/Actions/appActions";
import { handleSubmitContactUs } from "../../utils/Actions/beAnAllieActions.js";
import { useRouter } from "next/navigation";
import { connect } from "react-redux";
const ContactUs = (props) => {
  const router = useRouter();
  const ContactUsSchema = yup.object().shape({
    name: yup
      .string()
      .max(70, "Please enter a name of 50 or less characters")
      .required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    message: yup
      .string()
      .required("Please enter a message")
      .max(1000, "Please enter a message less than 1000 characters"),
  });
  return (
    <Fragment>
      <TitleBanner
        shootingStar={true}
        sideSrc1={"/assets/general/starL.png"}
        sideSrc2={"/assets/general/starR.png"}
        title={"Contact Us"}
      ></TitleBanner>
      <Paragraph>
      If you&apos;d like to get in touch with any questions, ideas, feedback or suggestions, please fill out the contact form below.
      </Paragraph>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={ContactUsSchema}
        onSubmit={async (values, formik) => {
          try {
            formik.setSubmitting(true);
            await props.toggleSpinner();
            await props.handleSubmitContactUs(values, props.csrf);
            await props.toggleSpinner();
            formik.setSubmitting(false);
            router.push("/thank-you");
          } catch (e) {
            formik.setSubmitting(false);
            console.log(e);
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          dirty,
          isValid,
        }) => (
          <FormStyled onSubmit={handleSubmit}>
            <FormInputWrapper>
              <FormLabel htmlFor="name">Full Name:*</FormLabel>
              <FormInput
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              ></FormInput>
              {errors.name && touched.name ? (
                <FormInputValidation>{errors.name}</FormInputValidation>
              ) : null}
            </FormInputWrapper>
            <FormInputWrapper>
              <FormLabel htmlFor="email">Email:*</FormLabel>
              <FormInput
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              ></FormInput>
              {errors.email && touched.email ? (
                <FormInputValidation>{errors.email}</FormInputValidation>
              ) : null}
            </FormInputWrapper>
            <FormInputWrapper $textarea={true}>
              <FormLabel htmlFor="message">
                Message / note for Allie&apos;s Art Club:
              </FormLabel>
              <FormTextArea
                rows="5"
                name="message"
                id="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={props.message}
              ></FormTextArea>
              {errors.message && touched.message ? (
                <FormInputValidation>{errors.message}</FormInputValidation>
              ) : null}
            </FormInputWrapper>

            <FormSubmitWrapper>
              <FormSubmit type="submit" value="Submit" disabled={isSubmitting}>
                <Button type="submit">Submit</Button>
              </FormSubmit>
              {props.beAnAllie.errorMessage.contactUs ? (
                <ErrorWrapper>
                  <ErrorMessage>
                    {props.beAnAllie.errorMessage.contactUs}
                  </ErrorMessage>
                </ErrorWrapper>
              ) : null}{" "}
              <SubmitInfo>
                <Paragraph>
                  Please note: all of your information will be kept private and
                  will not be shared with any other party.
                </Paragraph>
              </SubmitInfo>
            </FormSubmitWrapper>
          </FormStyled>
        )}
      </Formik>
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    beAnAllie: state.beAnAllie,
    csrf: state.app.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleSpinner: () => toggleSpinner(dispatch),
    handleSubmitContactUs: (values, csrf) =>
      handleSubmitContactUs(values, csrf, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
