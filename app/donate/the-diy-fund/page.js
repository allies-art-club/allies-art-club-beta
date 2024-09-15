"use client";
import React, { Fragment } from "react";
import { useRouter } from "next/navigation";
import TitleBanner from "../../../components/titleBanner/titleBanner.js";
import {
  Paragraph,
  FormStyled,
  FormCheckboxWrapper,
  FormInputWrapper,
  FormInputValidation,
  FieldSet,
  FieldSetWrap,
  FormInputCheckboxWrapper,
  FormInputCheckbox,
  CheckboxLabel,
  FormLabel,
  FormInput,
  FormTextArea,
  FormSubmitFigure,
  FormSubmitCaption,
  FormSubmitImage,
  FormSubmitWrapper,
  SubmitInfo,
  StarImg,
  FormSubmit,
  ErrorMessage,
  ErrorWrapper,
} from "../../../components/Styled/styled.js";
import { SideImg } from "../../../components/Styled/donate.styled.js";
import { Formik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import donateSuppliesSvg from "../../../components/Styled/bannerSvg/donateSupplies.svg";
import { handleSubmitSupplies } from "../../../utils/Actions/donateActions.js";
import { toggleSpinner } from "../../../utils/Actions/appActions.js";

const DonateSupplies = (props) => {
  let router = useRouter();
  const options = [
    "Books",
    "Colouring-in books",
    "Notepads / drawing pads",
    "Craft / speciality paper",
    "Pencils / crayons",
    "Pens / felt tips",
    "Paint / paintbrushes",
    "Pastels / chalk",
    "Rulers / rubbers / sharpeners",
    "Other (please describe)",
    "Glue / glitter glue",
    "Stickers / kid's crafts",
  ];
  const DonateFundsSchema = yup.object().shape({
    name: yup
      .string()
      .max(70, "Please enter a name of 50 or less characters")
      .required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    organisation: yup
      .string()
      .max(200, "Please enter a name of 200 characters or less"),
    message: yup
      .string()
      .max(1000, "Please enter a message less than 1000 characters"),
    supplies: yup
      .array()
      .min(1, "Please select something to donate")
      .required("Please select something to donate"),
  });
  return (
    <Fragment>
      <TitleBanner
        sideSrc1={"/assets/general/heartsL.png"}
        sideSrc2={"/assets/general/heartsR.png"}
        centreSrc={"/assets/general/curvedLine.png"}
        title={"The DIY Fund"}
      />
      <Paragraph>
        Please read the information below and fill out the form to send art
        supplies, books or other resources to Allie&apos;s Art Club.
      </Paragraph>
      <Paragraph>
        All donations must be delivered to the following address:
      </Paragraph>
      <Paragraph>Allie&apos;s Art Club</Paragraph>
      <Paragraph>Ringcross Community Center</Paragraph>
      <Paragraph>60 Lough Road</Paragraph>
      <Paragraph>London N7 8RH</Paragraph>
      <Paragraph>
        Donations can be delivered by post or dropped off at the community
        centre in person from Monday - Friday 10am - 5pm. Please ensure all
        supplies are in a usable condition.
      </Paragraph>
      <Formik
        initialValues={{
          name: "",
          email: "",
          organisation: "",
          message: "",
          supplies: [],
          suppliesOther: "",
        }}
        validationSchema={DonateFundsSchema}
        onSubmit={async (values, formik) => {
          try {
            formik.setSubmitting(true);
            await props.toggleSpinner();
            const response = await props.handleSubmitSupplies(
              values,
              props.csrf
            );
            await props.toggleSpinner();
            formik.setSubmitting(false);
            if (response === true) {
              router.push("/thank-you");
            }
          } catch (e) {
            console.log(e);
            formik.setSubmitting(false);
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
            <SideImg
              $donate={true}
              alt="star right"
              src={"/assets/general/starR.png"}
            />
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
            <FormInputWrapper>
              <FormLabel htmlFor="organisation">
                Organisation (if applicable):
              </FormLabel>
              <FormInput
                type="text"
                name="organisation"
                id="organisation"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.organisation}
              ></FormInput>
              <ErrorMessage></ErrorMessage>
              {errors.organisation && touched.organsation ? (
                <FormInputValidation>{errors.organisation}</FormInputValidation>
              ) : null}
            </FormInputWrapper>
            <FormCheckboxWrapper $longList={true}>
              <legend>Supplies to donate (check all that apply):*</legend>
              <FieldSet role="group" aria-labelledby="checkbox-group">  
                <Fragment>
                  {options && options.length
                    ? options.map((el, i) => (
                        <FieldSetWrap $longList={true} key={i}>
                          <FormInputCheckboxWrapper>
                            <FormInputCheckbox
                              id={
                                el.match("Other")
                                  ? el.split(" ").join("") + i
                                  : el.split(" ").join("")
                              }
                              type="checkbox"
                              name="supplies"
                              onChange={(event) => {
                                const checked = event.target.checked;
                                const valueArray = [...values.supplies] || [];
                                if (checked) {
                                  valueArray.push(event.target.value);
                                } else {
                                  valueArray.splice(
                                    valueArray.indexOf(event.target.value),
                                    1
                                  );
                                }
                                values.supplies = [...valueArray] || [];
                                event.target.blur();
                              }}
                              value={el}
                            />

                            <CheckboxLabel
                              $longList={"true"}
                              htmlFor={
                                el.match("Other")
                                  ? el.split(" ").join("") + i
                                  : el.split(" ").join("")
                              }
                            >
                              {el}
                            </CheckboxLabel>
                          </FormInputCheckboxWrapper>
                        </FieldSetWrap>
                      ))
                    : null}
                </Fragment>
              </FieldSet>

              {errors.supplies && touched.supplies ? (
                <FormInputValidation>{errors.supplies}</FormInputValidation>
              ) : null}
              <FormInputWrapper other={true}>
                <FormLabel $invisible={"true"} htmlFor="suppliesOther">
                  Art Other:*
                </FormLabel>
                <FormInput
                  type="text"
                  name="suppliesOther"
                  id="suppliesOther"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.suppliesOther}
                ></FormInput>
                {errors.artOther && touched.artOther ? (
                  <FormInputValidation>{errors.artOther}</FormInputValidation>
                ) : null}
              </FormInputWrapper>
            </FormCheckboxWrapper>
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
              <SubmitInfo>
                <StarImg
                  alt={"star left"}
                  src={"/assets/general/starL.png"}
                ></StarImg>
                <Paragraph>
                  Please note: all of your information will be kept private and
                  will not be shared with any other party.
                </Paragraph>
              </SubmitInfo>
              <FormSubmit type="submit" value="Submit">
                <FormSubmitFigure>
                  <FormSubmitImage
                    alt="submit"
                    src={"/assets/donateBanner/Arrow.png"}
                  ></FormSubmitImage>
                  <FormSubmitCaption>Submit!</FormSubmitCaption>
                </FormSubmitFigure>
              </FormSubmit>
            </FormSubmitWrapper>
            {props.donate.supplyError ? (
              <ErrorWrapper>
                <ErrorMessage>{props.donate.supplyError}</ErrorMessage>
              </ErrorWrapper>
            ) : null}
          </FormStyled>
        )}
      </Formik>
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    donate: state.donate,
    csrf: state.app.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleSpinner: () => toggleSpinner(dispatch),
    handleSubmitSupplies: (values, csrf) =>
      handleSubmitSupplies(values, csrf, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DonateSupplies);
