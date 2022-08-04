import React, {Fragment,Suspense, lazy, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {toggleMenu,toggleSubMenu,setCsrfToken} from './Actions/appActions.js';
import Header from './Components/header/header.js';
import {createGlobalStyle} from 'styled-components';
import {Container} from './Components/Styled/styled.js';
import Clipboard from './Components/clipboard/clipboard.js';
// import {Elements} from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
import Spinner from './Components/spinner.js';
import ErrorBoundary from './Pages/errorBoundary.js';
import components from './router.js';
const Home = lazy(()=> import('./Pages/home.js'));
const Footer = lazy(()=> import('./Components/footer/footer.js'));
const ThankYou = lazy(()=>import('./Pages/thankyou.js'));
const NotFound = lazy(()=>import('./Pages/notFound.js'));
const GlobalStyle = createGlobalStyle`
  html,body {
    box-sizing: border-box;
    font-size: 12px;
    overflow-x: hidden;
    min-height:100vh;
    @media(min-width:421px){
      font-size: 14px
    }
    @media(min-width: 768px){
      font-size: 18px;
    }
    @media(min-width: 1300px){
      font-size: 24px;
    }
    margin:0;
    padding:0;
    @media(max-width:767px){
      overflow-y: ${props=>props.menuOpen?'hidden':'auto'};

    }
  }
  body {
    background-image: url(/assets/white-bricks.jpg);
  }

  *, *::before, *::after {
    box-sizing: inherit;({cookie:true});
  }
  p, figcaption,span,label,legend,li,input,textarea {
    font-size: 1rem;
    font-family: "Architects Daughter";
  }
  p, figcaption {
    text-align: justify;
  }
`

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
const Routes = () => {
  return(
    <>
    {
      components.map((component)=>{
          let Page=lazy(()=>import('./Pages'+component.path))
          return(
              <Route key={component.name} path={component.url} exact strict render={
                  ()=>{
                      return(
                          <Clipboard children={
                              <Page />
                          }/>
                      )
                  }
              }/>
          )
      })
  
  }
  </>

  )
}
const App= (props) =>{
    var setCsrf = props.setCsrfToken;

    useEffect((props)=>{
      async function getToken(){
        const token =await fetch('/api/csrfToken',{
          credentials: "include"

        })
        const jsonTok = await token.json();
        setCsrf(jsonTok.token)
      }
      getToken()

    },[setCsrf])
    return (
      <Fragment>
        <Spinner visible={props.app.spinnerVisible}/>
        <GlobalStyle menuOpen={props.app.menuOpen}/>
        <Router>

          <ErrorBoundary>
              <Header subMenu={props.app.subMenu}open={props.app.menuOpen} toggleMenu={props.toggleMenu} toggleSubMenu={props.toggleSubMenu}/>
          </ErrorBoundary>
          <Suspense fallback={<Spinner visible={true}/>}>
          <ErrorBoundary>
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
                <Routes/>
                {/* <Route path="/be-an-allie/donateFunds" exact strict render={
                      ()=>{
                          return(
                            <Elements stripe={stripePromise}>
                              <Clipboard children={
                                <DonateFunds />
                              }/>
                            </Elements>
                          )
                      }
                  }
                  />
         */}
                
            
                  <Route path="/thank-you" exact strict render={
                        ()=>{
                            return(
                                <ThankYou></ThankYou>
                            )
                        }
                    }
                    />
                    <Route path="/welcome" exact strict render={
                          ()=>{
                              return(
                                  <ThankYou></ThankYou>
                              )
                          }
                      }
                      />
                    
                                <Route render={
                                  ()=>{
                                    return(
                                      <Clipboard children={
                                        <NotFound />
                                      }/>
                                    )
                                  }
                                }/>
              </Switch>
            </Container>
          </ErrorBoundary>
          <ErrorBoundary>
          <Footer />

          </ErrorBoundary>
          </Suspense>

        </Router>
        </Fragment>
    );
}
const mapStateToProps=(state)=>{
  return {
      app: state.app,      
  }
  
}
const mapDispatchToProps=(dispatch)=>{
  return {
      toggleMenu: (event)=>{
        toggleMenu(event,dispatch)
      },
      toggleSubMenu: (subMenu)=>{
        toggleSubMenu(subMenu,dispatch)
      },
      setCsrfToken:(token)=>{
        setCsrfToken(token,dispatch)
      }
      
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);