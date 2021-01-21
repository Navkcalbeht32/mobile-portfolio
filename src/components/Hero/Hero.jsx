import React from 'react';
import './Hero.styles.scss';
import HeroImage from '../../assets/hero-image.png';
import YouTube from '../../assets/youtube.png';
import Devf from '../../assets/devf.png';
import Linux from '../../assets/linux.png';
import TitleItem from '../TitleItem/TitleItem';

const Hero = () => {
    return (
        <div className="hero">
            <div className="image-container">
                <img src={YouTube} alt="" className="img img2"/>
                <img src={Linux} alt="" className="img img3"/>
                <img src={Devf} alt="" className="img img4"/>
            </div>
            
            
        </div>
    )
}

export default Hero


{/* <div className="content">
                <TitleItem />
                <div className="content-info">
                    <h4>Navigator of <span className="purple-text">eCommerce</span> & the <br/> latest <span className="blue-text">web technologies.</span></h4>
                </div>
            </div> */}