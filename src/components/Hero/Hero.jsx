import React from 'react';
import './Hero.styles.scss';
import YouTube from '../../assets/youtube.png';
import Devf from '../../assets/devf.png';
import Linux from '../../assets/linux.png';
import Dots from '../../assets/dots.svg';
import Rectangle from '../../assets/rectangle.svg';

// let imgArr = document.querySelectorAll('.img');
// let prevX = 0;
// let prevY = 0;
// let moveXAmount = 0;
// let moveYAmount = 0;

// document.addEventListener("mousemove", function(e){
//     mousePos(e);
// })

// function mousePos(e) {

//     moveXAmount = e.pageX - prevX;
//     moveYAmount = e.pageY - prevY;

//     moveImg(moveXAmount, moveYAmount);

//     prevX = e.pageX;
//     prevY = e.pageY;
// }

// function moveImg(xAmount, yAmount){

//     imgArr.forEach(function(img){
//         let movementStrength = 20 + (Math.random() * 20);

//         img.style.left = (img.offsetLeft) - (xAmount/movementStrength) + "px";
//         img.style.top = (img.offsetTop) - (yAmount/movementStrength) + "px";
//     })
// }

const Hero = () => {
    return (
        <div className="hero">
            <div className="image-container">
                {/* <img src={Dots} alt="" className="img img1"/> */}
                <img src={YouTube} alt="" className="img img2"/>
                <img src={Linux} alt="" className="img img3"/>
                <img src={Devf} alt="" className="img img4"/>
                {/* <img src={Rectangle} alt="" className="img img5"/> */}
            </div>
        </div>
    )
}

export default Hero;


{/* <div className="content">
                <TitleItem />
                <div className="content-info">
                    <h4>Navigator of <span className="purple-text">eCommerce</span> & the <br/> latest <span className="blue-text">web technologies.</span></h4>
                </div>
            </div> */}