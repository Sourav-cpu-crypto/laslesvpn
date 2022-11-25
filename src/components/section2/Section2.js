import React from 'react'
import logo1 from  '../.././picon.webp'
import logo2 from  '../.././loc.webp'
import logo3 from  '../.././server.svg'
import  './section2.css'
function Section2() {
  return (
    <div className='sec2'>
         <div className='user'>
         <div className='circle'>
         <img src={logo1} /> 
         </div>
    
             <div className='count'>
                 <p className='total'>90+</p>
                 <div className='category'><p>Users</p></div>
             </div>
      
        </div>
        <div  className='loc'>
        <div className='circle'>
        <img src={logo2}/> 
         </div>
    
             <div className='count'>
                 <p className='total'>90+</p>
                 <div className='category'><p>Locations</p></div>
             </div>
     
        
        </div>
        <div className='server'>
        <div className='circle'>
        <img src={logo3}/> 
         </div>
    
             <div className='count'>
                 <p className='total'>90+</p>
                 <div className='category'><p>Servers</p></div>
             </div>
     
        </div>
        </div>
  )
}

export default Section2