import React from "react";
import './Navbar.css';
import { Box} from '@mui/material';


export const Navbar = () => {
   
    return (
      
       <Box> 
        <nav className="navbar">
      <div className="navbar-logo">My Portfolio</div>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        {/* Add more links as needed */}
      </ul>
    </nav>  
     </Box>
       
   
    );
}
