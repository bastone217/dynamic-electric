import React from 'react';
import '../styles/contactUs.css'

const ContactUs = () =>(
   
    <div className='contact'>
         <h3 className='contact-row'> Bid/Estimates </h3>
         <p className='contact-row'> Phone: <span className="contact-us"> (209)-596-5419</span></p>
         <p className='contact-row'> Fax: <span className="contact-us"> (209)-580-6118</span></p>
         <p className='contact-row'> Email: Estimating@dynamicelectrical.org</p>
         <i className='contact-row'> Patrick Anderson: President </i>
         
         <h3 className='contact-row'> Office </h3>
         <p className='contact-row'> Office Hours: 8AM - 5PM PDT Mon.-Fri.</p>
         <p className='contact-row'> Phone: <span className="contact-us"> (740)-579-2994</span></p>
         <p className='contact-row'> Fax: <span className="contact-us"> (209)-580-6118</span></p>
         <p className='contact-row'> Email: Office@dynamicelectrical.org</p>
         <i className='contact-row'> Rhonda Stone: Office Manager </i>

        <h3 className='contact-row'>Address</h3>
        <p className='contact-row'> 3005 N. Buhach Road</p>
        <p className='contact-row'> Atwater, CA, 95301</p>
       
        <div className='project-row'>
            <p className='grid-item1'></p>
            <p className='grid-item1'></p>
        </div>

        <h3 className='contact-row1'>Want to work for our company? Send us your resume at: Office@dynamicelectrical.org</h3>
        <p className='contact-row1'> </p>
        
    </div>

);


export default ContactUs;