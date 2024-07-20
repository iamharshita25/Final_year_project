import { useState } from 'react';
import './Navbar.scss'


function Navbar() {
    const [open,setOpen]=useState(false)
    return (
        <nav>
            <div className="left">
                <a href='/' className='logo'>
                    <img src="src/component/Navbar/1.png" alt="" />

                </a>
                <a href='/'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Services</a>
                <a href='/'>Agents</a>
            </div>
            <div className="right">
                <a href='/'>Login</a>
                <a href='/' className='register'>Sign Up</a>
                <div className="menuIcon">
                    <img src="src/component/Navbar/mage--dots-menu.png" alt="" onClick={()=>setOpen(!open)}/>
                </div>
                <div className={open ? "menu active":"menu"}>
                    <a href='/'>Home</a>
                    <a href='/'>About</a>
                    <a href='/'>Services</a>
                    <a href='/'>Agents</a>
                    <a href='/'>Login</a>
                    <a href='/'>Sign up</a>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;