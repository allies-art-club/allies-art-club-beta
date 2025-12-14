"use client"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header/header.js'
import Footer from '../components/footer/footer.js'
import {Provider} from 'react-redux';
import store from '../utils/store';
import {toggleMenu,toggleSubMenu} from '../utils/Actions/appActions.js';
import GlobalStyle from '../components/Styled/global.styled.js'
import '../globals.scss';
import Container from '../components/clipboard/template.js'
import {StyledComponentsRegistry} from '../utils/serverstylesheet.js'
import { bigStem, arialNovaCond,arialNovaCondBold,nickAinley } from './fonts.js';

function RootLayout({ children }) {

  return (
    <Provider store={store}>
    <StyledComponentsRegistry
      
    >
    <html lang="en" className={`${bigStem.variable} ${arialNovaCond.variable} ${arialNovaCondBold.variable} ${nickAinley.variable}`}>
     
      <body>
        
        <GlobalStyle/>
        <Header />
          <Container>
            {children}   
          </Container>

          <Footer />
      </body>
    </html>
    </StyledComponentsRegistry>
    </Provider>
  );
}
// const mapStateToProps=(state)=>{
//   return {
//       app: state.app,      
//   }
  
// }
// const mapDispatchToProps=(dispatch)=>{
//   return {
//       toggleMenu: (event)=>{
//         toggleMenu(event,dispatch)
//       },
//       toggleSubMenu: (subMenu)=>{
//         toggleSubMenu(subMenu,dispatch)
//       }
      
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(RootLayout);
export default RootLayout;
