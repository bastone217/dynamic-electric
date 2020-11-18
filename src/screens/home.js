import React from 'react';
import "../styles/home.css"
import home from '../photos/homepage.jpg';
import home1 from '../photos/newhomepage2.jpg'; //need to fix photo
import home2 from '../photos/homepage5.jpg';
import home3 from '../photos/homepage4.jpg';

const homeImage = [
      home,
      home2,
      home3,
      home1,
];
 const Home = () =>(
   
        <div>
            <div className='project-row'>
            <p className='home-grid-item2'></p>
            <p className='home-grid-item2'></p>
            </div>
            
       <div className="home">
             <div className='project-row'>
            <p className='grid-item1'></p>
            <p className='grid-item1'></p>
        </div>

            <div className="each-slide">
            <div style={{'backgroundImage': `url(${homeImage[0]})`}}></div>
            </div>

            <div className='project-row'>
            <p className='grid-item1'></p>
            <p className='grid-item1'></p>
        </div>

            <div className="each-slide">
            <div style={{'backgroundImage': `url(${homeImage[1]})`}}></div>
            </div>

            <div className="home1">
            <div className='project-row'>
            <p className='home-grid-item1'></p>
            <p className='home-grid-item1'></p>
            </div>
        </div>

            <div className="each-slide">
            <div style={{'backgroundImage': `url(${homeImage[2]})`}}></div>
            </div>

      <div className="home1">
            <div className='project-row'>
            <p className='home-grid-item1'></p>
            <p className='home-grid-item1'></p>
            </div>
       </div>    
            
            <div className="each-slide">
            <div style={{'backgroundImage': `url(${homeImage[3]})`}}></div>
            </div>
      
      
      <div className="home1">
            <div className='project-row'>
            <p className='home-grid-item1'></p>
            <p className='home-grid-item1'></p>
            </div>
        </div>
       </div>
       </div>
   
 );


export default Home;