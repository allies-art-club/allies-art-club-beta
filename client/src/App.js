import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {connect} from 'react-redux'
import {logOut} from './Actions/appActions.js'

const Route = require("react-router-dom").Route

const App= (props) =>{
  
    return (
      <Router>
        <Route path="/" exact strict render={
                ()=>{
                    return(
                      <div>
                        {
                          props.app.loggedIn === false ?
                          <p>I AM NOT YET LOGGED IN</p>:
                          <p>NOT YET WORKING</p>
                        }
                      </div>
                    )
                }
            }
            />
      </Router>
      
    );
  
}
const mapStateToProps=(state)=>{
  return {
      app: state.app, 
      userList: state.userList,
      
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