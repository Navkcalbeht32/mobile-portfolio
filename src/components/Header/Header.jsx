import React from 'react';
import './Header.styles.scss';
import { ReactComponent as Menu }  from '../../assets/menu.svg';
import { ReactComponent as Logo }  from '../../assets/sumoski-logo.svg';

const btnOpen = document.getElementsByClassName('menu');
const btnClose = document.getElementsByClassName('menu');




const Header = () => {
    return (
        <div>
            
            <div className="header">
                <div className="header-wrapper">
                    <div className="header-left">
                        <Logo className="logo" />
                    </div>
                    <div className="header-right">
                        <div className="menu">
                            <Menu className="menu-icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="popup-menu ">
                
            </div>
        </div>
        
    )
}

export default Header;
