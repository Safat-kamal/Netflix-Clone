import React, { useEffect, useState } from 'react';
import logo from '../logo.png';
import avatar from '../avatar.png';
import './Navbar.css';

const Navbar = () => {
    const [show,handleShow] = useState(false);
    // to handle sticky  navbar scroll effect
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 100){
               handleShow(true); 
            }
            else{
                handleShow(false);
            }
        });
    },[])
  return (
    <div className={`navbar ${show && 'navbar_black'}`}>
        <img src={logo} className='netflix-logo' alt='netflix-logo'/>
        <img src={avatar} className='avatar' alt='avatar'/>
    </div>
  )
}

export default Navbar
