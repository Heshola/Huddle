import React from 'react'
import"./Navbar.css"
import pic1 from  './Image/logo.jpg'

const Navbar = () => {
    return (
          <div className='no'>
                <div className="saib">
                   <img className='joy' src={pic1} alt="" />
                   <div className='Huddle'>
                       <h1 >Huddle</h1>
                   </div>
                </div>
               <div className='hamid'>
                    <p>Try it free</p>
                </div> 

          </div>
            
    )
}

export default Navbar
