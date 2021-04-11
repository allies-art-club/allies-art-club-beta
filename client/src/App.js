import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut,toggleMenu} from './Actions/appActions.js';
import Header from './Components/header/header.js';
import {createGlobalStyle} from 'styled-components';
import {Container} from './Components/Styled/styled.js';
import Clipboard from './Components/clipboard/clipboard.js';

const Home = lazy(()=> import('./Pages/home.js'));
const About = lazy(()=>import('./Pages/about.js'));
const Thoughts = lazy(()=> import('./Pages/thoughts.js'));
const ClubsAndProjects = lazy(()=> import('./Pages/clubsAndProjects.js'));
const BeAnAllie = lazy(()=> import('./Pages/beAnAllie.js'));
const Footer = lazy(()=> import('./Components/footer/footer.js'));
const Donate = lazy(()=>import('./Pages/donate.js'))


const GlobalStyle = createGlobalStyle`

  html,body {
    font-size: 16px;
    margin:0;
    padding:0;
    @media(max-width:767px){
      overflow: ${props=>props.menuOpen?'hidden':'auto'};
    }
    @media(min-width: 768px){
      font-size: 18px;
    }
  }
  body {
    background-image: url(/assets/white-bricks.jpg);
  }
`


const App= (props) =>{
  
    return (
      <>
        <GlobalStyle menuOpen={props.app.menuOpen}/>
        <Router>
          <Header open={props.app.menuOpen} toggleMenu={props.toggleMenu}/>

          <Suspense fallback={<div>loading</div>}>
          <Container>
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
                          <Clipboard children={
                            <About />
                          } />
                        )
                    }
                }
                />
              <Route path="/how-to-be-an-allie" exact strict render={
                    ()=>{
                        return(
                          <Clipboard children={
                            <BeAnAllie />
                          } />
                        )
                    }
                }
                />
              <Route path="/allies-thoughts" exact strict render={
                    ()=>{
                        return(
                          <Clipboard children={
                            <Thoughts />
                          }/>
                        )
                    }
                }class
                />
              <Route path="/allies-clubs-and-projects" exact strict render={
                    ()=>{
                        return(
                          <Clipboard children={
                            <ClubsAndProjects />
                          }/>
                        )
                    }
                }
                />

              <Route path="/donate" exact strict render={
                    ()=>{
                        return(
                          <Donate />
                        )
                    }
                }
                />
            </Switch>
          </Container>
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
      },
      toggleMenu: (event)=>{
        toggleMenu(event,dispatch)
      }
      
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);