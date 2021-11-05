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
const AlliesFirstCommunityArtsEvent =lazy(()=>import('./Pages/articles/alliesFirstCommunityArtsEvent.js'));
const LaunchParty =lazy(()=>import('./Pages/activities/launchParty.js'));
const Home = lazy(()=> import('./Pages/home.js'));
const AboutAac = lazy(()=>import('./Pages/aboutaac.js'));
const AboutAlliesStory = lazy(()=>import('./Pages/aboutStory.js'));
const AboutAlliesFoundation = lazy(()=>import('./Pages/aboutAlliesFoundation.js'));
const Discussions= lazy(()=> import('./Pages/discussions.js'));
const Footer = lazy(()=> import('./Components/footer/footer.js'));
const Donate = lazy(()=>import('./Pages/donate.js'));
const ThankYou = lazy(()=>import('./Pages/thankyou.js'));
// const DonateFunds = lazy(()=>import('./Pages/donateFunds.js'));
const DonateSupplies = lazy(()=>import('./Pages/donateSupplies.js'));
const Membership=lazy(()=>import('./Pages/membership.js'));
const Volunteer=lazy(()=>import('./Pages/volunteer.js'));
const ContactUs=lazy(()=>import('./Pages/contactUs'));
const ArtCare = lazy(()=>import('./Pages/activities/artCare.js'));
const NotFound = lazy(()=>import('./Pages/notFound.js'));
const ArtistConversations = lazy(()=>import('./Pages/artistConversations.js'));
const Resources= lazy(()=>import('./Pages/resources.js'));
const ClubArticles = lazy(()=>import('./Pages/clubArticles.js'));
const PersonalStories = lazy(()=>import('./Pages/personalStories.js'));
const ProjectNews = lazy(()=>import('./Pages/projectNews'));
//articles
const WhatIsArt = lazy(()=>import('./Pages/articles/whatIsArt.js'));
const FoodBank = lazy(()=>import('./Pages/articles/foodBank.js'));
const ArtCarePacks = lazy(()=>import('./Pages/articles/artCarePacks.js'));

const RememberingAllie = lazy(()=>import('./Pages/articles/rememberingAllie.js'));
const CharityWeCanTrust = lazy(()=>import('./Pages/articles/charityWeCanTrust.js'));
const LessonsInCalligraphy= lazy(()=>import('./Pages/articles/lessonsInCalligraphy.js'));
const ArtAndWellbeing = lazy(()=>import('./Pages/articles/artAndWellbeing.js'));
const Activities = lazy(()=>import('./Pages/activities.js'));
const Events = lazy(()=>import('./Pages/events.js'));
const Projects = lazy(()=>import('./Pages/projects.js'));
const FactSheets = lazy(()=>import('./Pages/factSheets.js'));
const WorkSheets = lazy(()=>import('./Pages/workSheets.js'));
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
                <Route path="/allies-clubs-and-projects" exact strict render={
                      ()=>{
                          return(
                            <Clipboard children={
                              <Discussions />
                            }/>
                          )
                      }
                  }
                  />

                <Route path="/be-an-allie/donate" exact strict render={
                      ()=>{
                          return(
                              <Clipboard children={
                                <Donate />
                              }/>
                          )
                      }
                  }
                  />

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
                <Route path="/be-an-allie/donateSupplies" exact strict render={
                      ()=>{
                          return(
                              <Clipboard children={
                                <DonateSupplies />
                              }/>
                          )
                      }
                  }
                  />
                  <Route path="/be-an-allie/contact-us" exact strict render={
                        ()=>{
                            return(
                                <Clipboard children={
                                  <ContactUs />
                                }/>
                            )
                        }
                    }
                    />
                  <Route path="/be-an-allie/membership" exact strict render={
                        ()=>{
                            return(
                                <Clipboard children={
                                  <Membership />
                                }/>
                            )
                        }
                    }
                    />
                    <Route path="/be-an-allie/volunteer" exact strict render={
                          ()=>{
                              return(
                                  <Clipboard children={
                                    <Volunteer/>
                                  }/>
                              )
                          }
                      }
                      />
                      <Route path="/be-an-allie/contact" exact strict render={
                            ()=>{
                                return(
                                    <Clipboard children={
                                      <Volunteer/>
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
                    <Route path="/welcome" exact strict render={
                          ()=>{
                              return(
                                  <ThankYou></ThankYou>
                              )
                          }
                      }
                      />
                    <Route path="/activities/projects/art-care" exact strict render={
                          ()=>{
                              return(
                                <Clipboard children={
                                  <ArtCare></ArtCare>
                                }/>
                              )
                          }
                      }
                      />
                      <Route path="/activities/events/arts-fair-and-open-mic-launch-party" exact strict render={
                        ()=>{
                            return(
                              <Clipboard children={
                                <LaunchParty/>
                              }/>
                            )
                        }
                    }
                    />
                      <Route path="/discussions/artist-conversations" exact strict render={
                            ()=>{
                                return(
                                  
                            <Clipboard children={
                                    <ArtistConversations></ArtistConversations>
                            }/>
                                )
                            }
                        }
                        />
                        <Route path="/discussions/personal-stories" exact strict render={
                              ()=>{
                                  return(

                            <Clipboard children={
                                      <PersonalStories></PersonalStories>
                            }/>
                                  )
                              }
                          }
                          />
                          <Route path="/discussions/project-news" exact strict render={
                                ()=>{
                                    return(

                            <Clipboard children={
                                        <ProjectNews></ProjectNews>
                            }/>
                                    )
                                }
                            }
                            />
                            <Route path="/discussions/project-news/art-care-packs-tools-for-mental-wellbeing" exact strict render={
                                  ()=>{
                                      return(
  
                              <Clipboard children={
                                          <ArtCarePacks></ArtCarePacks>
                              }/>
                                      )
                                  }
                              }
                              />
                              <Route path="/discussions/project-news/allies-first-community-arts-event" exact strict render={
                                    ()=>{
                                        return(
    
                                <Clipboard children={
                                            <AlliesFirstCommunityArtsEvent></AlliesFirstCommunityArtsEvent>
                                }/>
                                        )
                                    }
                                }
                                />
                            <Route path="/discussions/club-articles" exact strict render={
                                  ()=>{
                                      return(

                            <Clipboard children={
                                          <ClubArticles></ClubArticles>
                            }/>
                                      )
                                  }
                              }
                              />
                              <Route path="/discussions" exact strict render={
                                    ()=>{
                                        return(
  
                              <Clipboard children={
                                            <Discussions/>
                              }/>
                                        )
                                    }
                                }
                                />

                              <Route path="/activities" exact strict render={
                                    ()=>{
                                        return(
  
                              <Clipboard children={
                                            <Activities/>
                              }/>
                                        )
                                    }
                                }
                                />
                                <Route path="/activities/projects" exact strict render={
                                      ()=>{
                                          return(
    
                                <Clipboard children={
                                              <Projects/>
                                }/>
                                          )
                                      }
                                  }
                                  />
                                  <Route path="/activities/events" exact strict render={
                                        ()=>{
                                            return(
      
                                  <Clipboard children={
                                                <Events/>
                                  }/>
                                            )
                                        }
                                    }
                                    />
                              <Route path="/discussions/club-articles/what-is-art" exact strict render={
                                    ()=>{
                                        return(
    
                              <Clipboard children={
                                            <WhatIsArt></WhatIsArt>
                              }/>
                                        )
                                    }
                                }
                                />
                                <Route path="/discussions/project-news/allies-food-bank" exact strict render={
                                      ()=>{
                                          return(
      
                                <Clipboard children={
                                              <FoodBank></FoodBank>
                                }/>
                                          )
                                      }
                                  }
                                  />
                                  <Route path="/discussions/personal-stories/lessons-in-calligraphy" exact strict render={
                                        ()=>{
                                            return(
        
                                  <Clipboard children={
                                                <LessonsInCalligraphy></LessonsInCalligraphy>
                                  }/>
                                            )
                                        }
                                    }
                                    />
                                    <Route path="/discussions/club-articles/remembering-allie" exact strict render={
                                          ()=>{
                                              return(
          
                                    <Clipboard children={
                                                  <RememberingAllie></RememberingAllie>
                                    }/>
                                              )
                                          }
                                      }
                                      />
                                      <Route path="/discussions/club-articles/art-and-wellbeing" exact strict render={
                                            ()=>{
                                                return(
            
                                      <Clipboard children={
                                                    <ArtAndWellbeing></ArtAndWellbeing>
                                      }/>
                                                )
                                            }
                                        }
                                        />
                                        <Route path="/discussions/club-articles/awtf-a-charity-we-can-trust" exact strict render={
                                              ()=>{
                                                  return(
              
                                        <Clipboard children={
                                                      <CharityWeCanTrust></CharityWeCanTrust>
                                        }/>
                                                  )
                                              }
                                          }
                                          />
                                        <Route path="/resources" exact strict render={
                                          ()=>{
                                            return(
                                              <Clipboard children={
                                                <Resources />
                                              }/>
                                            )
                                          }
                                        }/>
                                        <Route path="/resources/fact-sheets" exact strict render={
                                          ()=>{
                                            return(
                                              <Clipboard children={
                                                <FactSheets />
                                              }/>
                                            )
                                          }
                                        }/>
                                        <Route path="/resources/work-sheets" exact strict render={
                                          ()=>{
                                            return(
                                              <Clipboard children={
                                                <WorkSheets />
                                              }/>
                                            )
                                          }
                                        }/>
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