import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import './StickyMenu.styles.scss';
import { ReactComponent as Code } from '../../assets/code.svg';
import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as Skills } from '../../assets/skills.svg';

const StickyMenu = () => {
    return (
        <div className="sticky-menu">
            <div className="menu-wrapper">
                <MenuItem Icon={Home} title="Home" />
                <MenuItem Icon={Skills} title="Skills" />
                <MenuItem Icon={Code} title="Portfolio" />
            </div>
        </div>
    )
}

export default StickyMenu;
