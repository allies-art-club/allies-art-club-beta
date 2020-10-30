import React from 'react';
import {NavLink} from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <nav>
                <h1 style={{textAlign:'center'}}>
                    <NavLink
                        exact to='/'>
                        <p>ALLIE'S</p>
                        <p>Donate</p>
                        <p>ART CLUB</p>
                    </NavLink>
                    
                </h1>
                <ul style={{display:'flex',justifyContent:'space-between',listStyle:'none'}}>
                    <li>
                        <NavLink 
                            exact to='/about'
                            activeStyle={{color:'red'}}
                            >About Allie's Art Club</NavLink>
                    </li>
                    <li>
                        <NavLink 
                            exact to='/allies-thoughts'
                            activeStyle={{color:'red'}}
                            >Allie's Thoughts & Updates</NavLink>
                    </li>
                    <li>
                        <NavLink 
                            exact to='/allies-clubs-and-projects'
                            activeStyle={{color:'red'}}
                            >Allie's clubs and projects</NavLink>
                    </li>
                    <li>
                        <NavLink 
                            exact to='/how-to-be-an-allie'
                            activeStyle={{color:'red'}}
                            >How to be an allie</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;