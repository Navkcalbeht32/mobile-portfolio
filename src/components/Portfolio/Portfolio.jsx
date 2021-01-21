import React from 'react';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import './Portfolio.styles.scss';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="portfolio-header">
                <h3>Portfolio</h3>
                <a href=""><h3>View All ></h3></a>
            </div>
            <div className="portfolio-cards">
                <PortfolioCard />
            </div>
        </div>

    )
}

export default Portfolio
