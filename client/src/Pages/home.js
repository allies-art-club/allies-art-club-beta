import React from 'react';
import {connect} from 'react-redux';
import Carousel from '../Utils/Components/carousel.js'
import {carouselClick} from '../Actions/homeActions';

const importAll = (photos) => {
    console.log(photos.keys())
    return photos.keys()
};

const photos = importAll(require.context('../../public/assets/carouselHome',false,/\.png|\.jpg/));

const Home = (props) => {
    return (
        <>
            <Carousel photoLoc={'../../assets/carouselHome/'} photos={photos}carouselClick={props.carouselClick} imageIndices={props.home.imageIndices} direction={props.home.direction}/>
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