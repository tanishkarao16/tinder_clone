 import React from 'react'
 import "./Header.css";
 import PersonIcon from '@mui/icons-material/Person'; 
 import { IconButton } from '@mui/material';
 import ForumIcon from '@mui/icons-material/Forum';


 function Header() {
   return (
     <div className='header'>

        <IconButton>
        <PersonIcon fontSize='large' className='header_icon'/>
        </IconButton>

        <img className='header_logo'
        src='/image/tinder_logo.jpeg'
        alt='logo'
        ></img>

        <IconButton>
        <ForumIcon fontSize='large' className='header_icon'/>
        </IconButton>

     </div>
   )
 }
 
 export default Header
 