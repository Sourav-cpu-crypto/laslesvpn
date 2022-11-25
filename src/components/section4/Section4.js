import React from 'react'
import './section4.css'
import pay from  '../.././features.svg'
import pricing from  '../.././pricing.png'
function Section4() {
  return (
    <div className='sec4'>

        <div><h2>Choose Your Plan</h2></div>
        <div><p>Let's choose the package that is best for you and explore it happily and cheerfully.</p></div>
        <div className='pay'>

        <div className='pay1'>
        <img src={pricing}></img>
        <h3>Free Plan</h3>
        <p>Unlimited Bandwidth</p>
        <p>Encrypted Connection</p>
        <p>No Traffic Logs</p>
        <p>Works on All Devices</p>
        <h4>Free</h4>
        <button >
            Sign Up
        </button>
</div>
<div className='pay1'>
<img src={pricing}></img>
        <h3>Premium Plan</h3>
        <p>Unlimited Bandwidth</p>
        <p>Encrypted Connection</p>
        <p>Yes Traffic Logs</p>
        <p>Works on All Devices</p>
        <p>Connect Anyware</p>
        
        <h4>$9/mon</h4>
        <button >
            Sign Up
        </button>


</div>
<div className='pay1'>
<img src={pricing}></img>
        <h3>Premium Plan</h3>
        <p>Unlimited Bandwidth</p>
        <p>Encrypted Connection</p>
        <p>Yes Traffic Logs</p>
        <p>Works on All Devices</p>
        <p>Connect Anyware</p>
        
        <h4>$12/mon</h4>
        <button >
            Sign Up
        </button>

</div>
        </div>
    </div>
  )
}

export default Section4