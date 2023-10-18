import React, { useState } from 'react'
import './navbar.css'
import logo from '../../images/logo.png'
import Contacting from '../../images/contact.png'
import {Link} from 'react-scroll';
import menu from '../../images/menu.png'
const Navbar = () => {
   const [showMenu, setShowMenu]=useState(false);

  return (
   <nav className='navbar'>
    <img src={logo} alt='Logo' className='logo'/>
     <div className='desktopMenu'>
      
  <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopListItem'>Home</Link>
  <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='desktopListItem'>About</Link>
  <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-50} duration={500} className='desktopListItem'>Portfolio</Link>
     </div>

    
      
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}  className='desktopbtn'   >
        <img src={Contacting} alt='' className='desktopimg'/>
        Contact Me</Link>


        <img src={menu} alt='menu' className='menu' onClick={()=>setShowMenu(!showMenu)}/>
     <div className='navMenu' style={{display:showMenu? 'flex':'none'}}>
      
  <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Home</Link>
  <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>About</Link>
  <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
  <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Contact Me</Link>
     </div>
   </nav>
  )
}

export default Navbar
