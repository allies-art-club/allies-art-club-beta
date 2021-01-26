import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut} from './Actions/appActions.js';
import Header from './Components/header/header.js';
import {createGlobalStyle} from 'styled-components';
import {PageContainer} from './Components/Styled/styled.js'

const Home = lazy(()=> import('./Pages/home.js'));
const About = lazy(()=>import('./Pages/about.js'));
const Thoughts = lazy(()=> import('./Pages/thoughts.js'));
const ClubsAndProjects = lazy(()=> import('./Pages/clubsAndProjects.js'));
const BeAnAllie = lazy(()=> import('./Pages/beAnAllie.js'));
const Footer = lazy(()=> import('./Components/footer/footer.js'));



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

          <Suspense fallback={<div>loading</div>}>
          <PageContainer>
            <Switch>
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
            </Switch>
          </PageContainer>
          <Footer />
          </Suspense>

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