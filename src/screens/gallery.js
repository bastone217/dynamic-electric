import React from 'react';
import '../styles/gallery.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img1 from '../photos/workpic2.jpg';
import img2 from '../photos/workpic3.jpg';
import img3 from '../photos/workpic4.jpg';
import img4 from '../photos/workpic6.jpg';
import img5 from '../photos/workpic7.jpg';
import img6 from '../photos/workpic8.jpg';
import img7 from '../photos/workpic12.jpg';
import img8 from '../photos/Workpic16.jpg';
import img9 from '../photos/workpic18.jpg';
import img10 from '../photos/workpic19.jpg';
import img11 from '../photos/lamppost.jpg';
import img12 from '../photos/new14.jpg';
import img13 from '../photos/wp4.jpg';
import img14 from '../photos/wp5.jpg';
import img15 from '../photos/wp1.jpg';
import img16 from '../photos/wp3.jpg';
import img17 from '../photos/wp6.jpg'

const slideImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  
];

const Gallery = () => {
    return (
      <div>
        <div className='project-row'>
            <p className='grid-item1'></p>
            <p className='grid-item1'></p>
        </div>
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
              
            </div>
          </div>
         
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[6]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[7]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[8]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[9]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[10]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[11]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[12]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[13]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[14]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[15]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[16]})`}}>
             
            </div>
          </div>
         
                         
         </Slide>
         <div className='gallery-row'>
            <p className='gallery-grid-item1'></p>
            <p className='gallery-grid-item1'></p>
        </div>
      </div>
    )
};


export default Gallery;