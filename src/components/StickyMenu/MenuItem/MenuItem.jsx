import { Icon } from '@material-ui/core';
import React from 'react';
import './MenuItem.styles.scss';
import { ReactComponent as Code } from '../../../assets/code.svg';

const MenuItem = ({ Icon, title }) => {
    return (
        <div className="menu-item">
            <Icon className="icon" />
            <h4 className="title">{title}</h4>
        </div>
    )
}

export default MenuItem
