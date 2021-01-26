import React from 'react';
import PortfolioCard from './PortfolioCard/PortfolioCard';
import './Portfolio.styles.scss';
import YouTube from '../../assets/youtube.png';
import Devf from '../../assets/devf.png';
import Tech from '../../assets/3dtechhome.png';


const Portfolio = () => {
    return (
        <div className="portfolio">
            <PortfolioCard 
            image={YouTube} 
            title="YouTube Clone" 
            codeLink="https://github.com/Navkcalbeht32/youtube-clone" 
            liveLink="https://github.com/Navkcalbeht32/youtube-clone" 
            />
            
            <PortfolioCard 
            image={Devf} 
            title="Develop Freedom" 
            codeLink="https://github.com/Navkcalbeht32/dev-freedom" 
            liveLink="https://flamboyant-nightingale-f1216e.netlify.app/" 
            />
           
            <PortfolioCard 
            image={Tech} 
            title="3D Tech Ecommerce Site" 
            codeLink="https://github.com/Navkcalbeht32/ecommerce-stripe" 
            liveLink="https://flamboyant-nightingale-f1216e.netlify.app" 
            />

            <div className="bottom-fade"></div> 
        </div>
    )
}

export default Portfolio;
