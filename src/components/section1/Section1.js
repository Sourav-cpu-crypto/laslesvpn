import React from 'react'
import './section1.css';
import logo1 from  '../.././vpn.png'
function Section1() {
  return (
    <div className='sec1'>
        <div className='about'>
<h1 className='h1'>Want anything to be easy with LaslesVPN.</h1>
<p className='p'>Provide a network for all your needs with ease and fun using LaslesVPN
     discover interesting features from us.</p>


     <button>Get Started</button>
     <div className='buttonbelow'></div>
            </div>

   

            <div className='vpn'>
            <img  src={logo1}></img>
            </div>
    </div>
  )
}

export default Section1