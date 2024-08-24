import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
   const [formData,setFormData]=useState({})
   
    const handleChange =(e) =>{
        setFormData(
            {
                ...formData,
                [e.target.id]:e.target.value
            }
        )
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        
    }
    console.log(formData)
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} >
                <input
                    type='text' placeholder='First Name' 
                    id='firstName' 
                    aria-label='First Name'
                    onChange={handleChange}
                />
                <input
                    type='text'
                    placeholder='Last Name'
                    id='lastName'
                    aria-label='Last Name'
                    onChange={handleChange}
                />
                <input
                    type='email'
                    placeholder='Email'
                    id='email'
                    aria-label='Email'
                    onChange={handleChange}
                />
                <input
                    type='password'
                    placeholder='Password'
                    id='password'
                    aria-label='Password'
                    onChange={handleChange}
                />
                <input
                    type='number'
                    placeholder='Phone Number'
                    id='phoneNumber'
                    aria-label='Phone Number'
                    onChange={handleChange}
                />
                <button>
                    {'Sign Up'}
                </button>
            </form>
            <div>
                <p>Have an account?</p>
                <Link to="/signin">Sign in</Link>
            </div>
            {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
        </div>
    );
}

