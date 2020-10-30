import React from 'react';
import {connect} from 'react-redux';
import Carousel from '../Utils/Components/carousel.js'
import {carouselClick} from '../Actions/homeActions';

const Home = (props) => {
    return (
        <>
            <h1>HOME</h1>
            <Carousel carouselClick={props.carouselClick} imageIndices={props.home.imageIndices} direction={props.home.direction}/>
        </>
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