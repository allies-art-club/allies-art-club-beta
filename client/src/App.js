import React, {Fragment,Suspense, lazy, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut,toggleMenu,toggleSubMenu,setCsrfToken} from './Actions/appActions.js';
import Header from './Components/header/header.js';
import {createGlobalStyle} from 'styled-components';
import {Container} from './Components/Styled/styled.js';
import Clipboard from './Components/clipboard/clipboard.js';
import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Spinner from './Components/spinner.js';

const Home = lazy(()=> import('./Pages/home.js'));
const AboutAac = lazy(()=>import('./Pages/aboutaac.js'));
const AboutAlliesStory = lazy(()=>import('./Pages/aboutStory.js'));
const AboutAlliesFoundation = lazy(()=>import('./Pages/aboutAlliesFoundation.js'));
const Thoughts = lazy(()=> import('./Pages/thoughts.js'));
const ClubsAndProjects = lazy(()=> import('./Pages/clubsAndProjects.js'));
const BeAnAllie = lazy(()=> import('./Pages/beAnAllie.js'));
const Footer = lazy(()=> import('./Components/footer/footer.js'));
const Donate = lazy(()=>import('./Pages/donate.js'));
const ThankYou = lazy(()=>import('./Pages/thankyou.js'));
const DonateFunds = lazy(()=>import('./Pages/donateFunds.js'));
const DonateSupplies = lazy(()=>import('./Pages/donateSupplies.js'));

const Access2Art = lazy(()=>import('./Pages/access2Art.js'));

const ArtistConversations = lazy(()=>import('./Pages/artistConversations.js'));

const ClubArticles = lazy(()=>import('./Pages/clubArticles.js'));
const PersonalStories = lazy(()=>import('./Pages/personalStories.js'));
const ProjectNews = lazy(()=>import('./Pages/projectNews'));

const GlobalStyle = createGlobalStyle`
  html,body {
    box-sizing: border-box;
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

  *, *::before, *::after {
    box-sizing: inherit;({cookie:true});
  }
  p {
    font-family: "Architects Daughter";
  }
`
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const App= (props) =>{
    var setCsrf = props.setCsrfToken;
    useEffect((props)=>{
      console.log('ye')
      async function getToken(){
        const token =await fetch('/api/csrfToken',{
          credentials: "include"

        })
        const jsonTok = await token.json();
        console.log(jsonTok);
        setCsrf(jsonTok.token)
      }
      getToken()

    },[setCsrf])
    return (
      <Fragment>
        <GlobalStyle menuOpen={props.app.menuOpen}/>
        <Router>
          <Header subMenu={props.app.subMenu}open={props.app.menuOpen} toggleMenu={props.toggleMenu} toggleSubMenu={props.toggleSubMenu}/>

          <Suspense fallback={<Spinner/>}>
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
              <Route path="/about/allies-art-club" exact strict render={
                    ()=>{
                        return(
                          <Clipboard children={
                            <AboutAac />
                          } />
                        )
                    }
                }
                />
                <Route path="/about/allies-story" exact strict render={
                      ()=>{
                          return(
                            <Clipboard children={
                              <AboutAlliesStory />
                            } />
                          )
                      }
                  }
                  />
                  <Route path="/about/allies-foundation" exact strict render={
                        ()=>{
                            return(
                              <Clipboard children={
                                <AboutAlliesFoundation />
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
                            <Clipboard children={
                              <Donate />
                            }/>
                        )
                    }
                }
                />

              <Route path="/donateFunds" exact strict render={
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
      
              <Route path="/donateSupplies" exact strict render={
                    ()=>{
                        return(
                            <Clipboard children={
                              <DonateSupplies />
                            }/>
                        )
                    }
                }
                />
                <Route path="/thank-you" exact strict render={
                      ()=>{
                          return(
                              <ThankYou></ThankYou>
                          )
                      }
                  }
                  />
                  <Route path="/projects/access-2-art" exact strict render={
                        ()=>{
                            return(
                              <Clipboard children={
                                <Access2Art></Access2Art>
                              }/>
                            )
                        }
                    }
                    />
                    <Route path="/updates/artist-conversations" exact strict render={
                          ()=>{
                              return(
                                
                          <Clipboard children={
                                  <ArtistConversations></ArtistConversations>
                          }/>
                              )
                          }
                      }
                      />
                      <Route path="/updates/personal-stories" exact strict render={
                            ()=>{
                                return(

                          <Clipboard children={
                                    <PersonalStories></PersonalStories>
                          }/>
                                )
                            }
                        }
                        />
                        <Route path="/updates/project-news" exact strict render={
                              ()=>{
                                  return(

                          <Clipboard children={
                                      <ProjectNews></ProjectNews>
                          }/>
                                  )
                              }
                          }
                          />
                          <Route path="/updates/club-articles" exact strict render={
                                ()=>{
                                    return(

                          <Clipboard children={
                                        <ClubArticles></ClubArticles>
                          }/>
                                    )
                                }
                            }
                            />
            </Switch>
          </Container>
          <Footer />
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
      logOut: (event)=>{
          logOut(event,dispatch)
      },
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