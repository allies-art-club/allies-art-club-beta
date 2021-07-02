import React,{Fragment} from 'react';
import {connect} from 'react-redux';
import Carousel from '../Components/carousel.js'
import {carouselClick} from '../Actions/homeActions';
import carouselHome from './carouselHome/carouselHome.js'



const Home = (props) => {
    return (
        <Fragment>
            <Carousel photoLoc={'../../assets/carouselHome/'} carouselObj={carouselHome} carouselClick={props.carouselClick} imageIndices={props.home.imageIndices} direction={props.home.direction}/>
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