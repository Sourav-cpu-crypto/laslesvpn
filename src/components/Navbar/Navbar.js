import React from 'react'
import './Navbar.css';
import logo1 from  '../.././logo1.svg'
export default function Navbar() {
  return (
    <div className='nav'>
<div className='logo'>

  <img src={logo1} /> 

     
       <span className='logoname'>Lasles<span className='vpn'>VPN</span></span>
     

</div>
<div className='link'>
<ul>
    <li>About</li>
    <li>Features</li>
    <li>Pricing</li>
    <li>Testimonials</li>
    <li>Help</li>


</ul>
</div>
<div className='account'>
<button className='Signin'>Sign In</button>
<button className='signup'>SignUp</button>
</div>

    </div>
  )
}
