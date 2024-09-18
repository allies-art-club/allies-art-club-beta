
import {createGlobalStyle} from 'styled-components'
import {connect} from 'react-redux'

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
      overflow-y: ${props=>props.app.menuOpen?'hidden':'auto'};

    }
  }
  body {
    background-image: url(/assets/pink-wall.jpg);
    background-size: contain;
  }

  *, *::before, *::after {
    box-sizing: inherit;({cookie:true});
  }
  p, figcaption,span,label,legend,li,input,textarea {
    font-size: 2rem;
    font-family: var(--font-arial-nova-cond);  //global font
  }
  p, figcaption {
    text-align: justify;
  }
`
const mapStateToProps=(state)=>{
    return {
        app: state.app,      
    }
    
  }

  const mapDispatchToProps=(dispatch)=>{
    return {
        
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GlobalStyle);