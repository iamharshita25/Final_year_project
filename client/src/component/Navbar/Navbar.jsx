import { useState } from 'react';
import './Navbar.scss'
import { userdata } from "../../library/homedata"
import { Link } from 'react-router-dom';


function Navbar() {
    const [open, setOpen] = useState(false)
    const user = true;


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
                {user ? (
                    <div className='user'>
                        <img src={userdata.image} alt="" />
                        <span>{userdata.name}</span>
                        <Link to="/profile" className='profile'>
                        <div className="notification">
                            3
                        </div>
                        <span>Profile</span>
                        </Link>

                    </div>) : (<>
                        <Link to="/login" className='login'>Login</Link>
                        <Link to="/signup" className=' signup register'>Sign up</Link></>)}
                <div className="menuIcon">
                    <img src="src/component/Navbar/mage--dots-menu.png" alt="" onClick={() => setOpen(!open)} />
                </div>
                <div className={open ? "menu active" : "menu"}>
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