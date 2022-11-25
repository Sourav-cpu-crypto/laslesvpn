import React from 'react';
import  sec3 from './section3.css';
import logo1 from  '../.././explain.png'
import logo2 from  '../.././features.svg'
function Section3() {
  return (
    <div className='sec3'>

    <div className='image'>

<img src={logo1}></img>
        
</div>
<div className='features'>

    <h2>We Provide Many Features You can use</h2>   
    <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
    <br/>
    <p>
        <img src={logo2}></img>
        Powerfull online protection.</p>
   <p>
   <img src={logo2}></img>
       Internet without borders.</p>
   <p>
   <img src={logo2}></img>
       Supercharged VPN.</p>
   <p>
   <img src={logo2}></img>
       Internet without borders.</p>


     
</div>

    </div>
  )
}

export default Section3