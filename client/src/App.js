import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut} from './Actions/appActions.js';
import Header from './Utils/header.js';
import Footer from './Utils/footer.js';
import Home from './Pages/home.js';
import About from './Pages/about.js';
import Thoughts from './Pages/thoughts.js';
import ClubsAndProjects from './Pages/clubsAndProjects.js';
import BeAnAllie from './Pages/beAnAllie.js';
import {createGlobalStyle} from 'styled-components';
import {PageContainer} from './Utils/Components/Styled/styled.js'

const Route = require("react-router-dom").Route;

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    background-image: url(/assets/white-bricks.jpg)
  }
`


const App= (props) =>{
  
    return (
      <>
        <GlobalStyle />
        <Router>
          <Header />
          <PageContainer>
            <Route path="/" exact strict render={
                    ()=>{
                        return(
                          <Home />
                        )
                    }
                }
                />
            <Route path="/about" exact strict render={
                  ()=>{
                      return(
                        <About />
                      )
                  }
              }
              />
            <Route path="/how-to-be-an-allie" exact strict render={
                  ()=>{
                      return(
                        <BeAnAllie />
                      )
                  }
              }
              />
            <Route path="/allies-thoughts" exact strict render={
                  ()=>{
                      return(
                        <Thoughts />
                      )
                  }
              }class
              />
              <Route path="/allies-clubs-and-projects" exact strict render={
                  ()=>{
                      return(
                        <ClubsAndProjects />
                      )
                  }
              }
              />
          </PageContainer>
          <Footer />
        </Router>
      </>
      
    );
  
}
const mapStateToProps=(state)=>{
  return {
      app: state.app,      
  }
  
}
const mapDispatchToProps=(dispatch)=>{
  return {
      logOut: (event)=>{
          logOut(event,dispatch)
      }
      
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);