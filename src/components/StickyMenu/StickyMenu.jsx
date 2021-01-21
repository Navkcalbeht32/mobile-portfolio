import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import './StickyMenu.styles.scss';
import { Link } from "react-router-dom";
import { ReactComponent as Code } from '../../assets/code.svg';
import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as Skills } from '../../assets/skills.svg';

const StickyMenu = () => {
    return (
        <div className="sticky-menu">
            <div className="menu-wrapper">
                <Link to="/" style={{ textDecoration: 'none' }}><MenuItem Icon={Home} title="Home" /></Link>
                <Link to="/skills" style={{ textDecoration: 'none' }}><MenuItem Icon={Skills} title="Skills" /></Link>
                <Link to="/portfolio" style={{ textDecoration: 'none' }}><MenuItem Icon={Code} title="Portfolio" /></Link>
            </div>
        </div>
    )
}

export default StickyMenu;
