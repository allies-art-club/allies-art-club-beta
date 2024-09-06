"use client";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { carouselClick } from "../utils/Actions/homeActions";
import Homepage from "./homepage.js";
import carouselHome from "../utils/carouselConfig/carouselHome.js";
import ClipboardHeadings from "../components/newHomepage/clipboardHeadings.js";
import CarouselLogo from "../components/newHomepage/carouselLogo.js";
import BodyPage from "../components/newHomepage/bodyPage";
import JoinUs from "../components/newHomepage/joinUs";


const Home = (props) => {
  return (
    <Fragment>
      <ClipboardHeadings />
      <BodyPage id="bodyPage" />
      <JoinUs id="joinUs" /> <Homepage />
      <CarouselLogo />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    home: state.home,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    carouselClick: (direction) => carouselClick(direction, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
