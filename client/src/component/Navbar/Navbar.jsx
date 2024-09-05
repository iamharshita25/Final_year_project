import { useState } from 'react';
import './Navbar.scss'
import { userdata } from "../../library/homedata"
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'

function Navbar() {
    const { currentUser } = useSelector((state) => state.user);
    const [open, setOpen] = useState(false)
    // const user = true;


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
                {currentUser ? (
                    <div className='user'>
                        <Link to="/profile" >
                        <img src={currentUser.avatar} alt="profile" />
                        <span className='name'>{currentUser.firstName}</span>
                        </Link>
                           
                            <span className='profile'>Sign out</span>

                    </div>) : (<>
                        <Link to="/signin" className='login'>Login</Link>
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