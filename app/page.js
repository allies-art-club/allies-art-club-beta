"use client"
import React,{Fragment} from 'react';
import {connect} from 'react-redux';
import Carousel from '../components/carousel.js';
import {carouselClick} from '../utils/Actions/homeActions';
import carouselHome from '../utils/carouselConfig/carouselHome.js'



const Home = (props) => {
    return (
        <Fragment>
            <Carousel home={"yes"} photoLoc={'../../assets/carouselHome/'} carouselObj={carouselHome} carouselClick={props.carouselClick} imageIndices={props.home.imageIndices} direction={props.home.direction}/>
        </Fragment>
    )
}

const mapStateToProps=(state)=>{
    return {
        home: state.home
        
    }
    
  }
  const mapDispatchToProps=(dispatch)=>{
    return {
        carouselClick: (direction)=>carouselClick(direction,dispatch)
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Home);