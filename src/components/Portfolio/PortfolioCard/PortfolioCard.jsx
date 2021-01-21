import React from 'react';
import './PortfolioCard.styles.scss';
import { ReactComponent as Code } from '../../../assets/code.svg';
import YouTube from '../../../assets/youtube.png';

const PortfolioCard = ({ image, title, subtitle, description }) => {
    return (
        <div className="portfolio-card">
            <img src={image} alt=""/>
            <div className="info-container">
                <h2>{title}</h2>
                <h4>This project tested my skill of building from looking, by developing a front-end experienced based upon an already well known platform.<br/></h4>
                <h5>Complete back-end functionality is being implemented.</h5>
                <div className="btn-container">
                <a href="#">
                    <div className="btn">
                        <h4>View Live</h4>
                    </div>
                </a>
                <a href="#">
                    <div className="code-btn">
                        <Code className="code-icon" />
                    </div>
                </a>
                </div>
                
            </div>
        </div>
    )
}

export default PortfolioCard;
