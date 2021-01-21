import React from 'react';
import PortfolioCard from './PortfolioCard/PortfolioCard';
import './Portfolio.styles.scss';
import YouTube from '../../assets/youtube.png';
import Devf from '../../assets/devf.png';


const Portfolio = () => {
    return (
        <div className="portfolio">
            <PortfolioCard image={YouTube} title="YouTube Clone"/>
            <PortfolioCard image={Devf} title="Develop Freedom" />
            <PortfolioCard image={Devf} title="Develop Freedom" />
            <PortfolioCard image={Devf} title="Develop Freedom" />
            <div className="bottom-fade"></div> 
        </div>
    )
}

export default Portfolio;
