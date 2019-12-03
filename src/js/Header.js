import React from 'react';
import ButtonApp from './ButtonApp';
import logo from '../img/logo.gif';

const Header = props => {
    return(
        <div>
            
            <a href="#" className="logo" >
                <img src={logo} className="img-fluid mt-3" alt="Aeroport AMS "/>
            </a>

            <div className="date mt-5">
                <h2>21:20</h2>
                <h4>21 / NOV / 2019</h4>
            </div>
            
            <div>
                <ButtonApp text="DEMAIN" type="solid"/>
                <ButtonApp text="AUJOURD’HUI" type="line"/>
            </div>

        </div>
    
    )
}

export default Header;