import React from 'react'
import { NavLink } from 'react-router-dom'

const LeftPannel = () => {
  return (
    <div className='left-pannel'>
        <h1>Welcome to Khadi India</h1>
        <h3>The One Stop Solution</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa laborum maxime, dolores exercitationem sed non ea rem enim soluta. Error, quaerat natus corrupti excepturi sint nesciunt, ut veniam et soluta dolorum facilis beatae tempora.</p>
        <NavLink className="mybtn" to="/contact">Contact us</NavLink>
    </div>
  )
}

export default LeftPannel