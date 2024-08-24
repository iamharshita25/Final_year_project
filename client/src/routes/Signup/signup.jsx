import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css"; // Import the CSS file

export default function SignUp() {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="signup-container">
            <div className="left-panel">
                <h1>A house is made of bricks and beams. A home is made of hopes and dreams. We'll help you find your home.</h1>
                <img
                    src="src/routes/Signup/j-removebg-preview.png" // Replace with the path to your image
                    alt="Dream Home"
                    className="left-image"
                />

            </div>
            <div className="right-panel">
                <div className="form-container">
                    <h1>Sign Up Center</h1>


                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            id="fullName"
                            aria-label="Full Name"
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            id="email"
                            aria-label="Email"
                            onChange={handleChange}
                        />
                        <input
                            type='number'
                            placeholder='Phone Number'
                            id='phoneNumber'
                            aria-label='Phone Number'
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            id="password"
                            aria-label="Password"
                            onChange={handleChange}
                        />
                        <button className="submit-button">Create Account</button>
                        <button className="submit-button">Sign up with Google</button>
                    </form>
                    <div className="login-link">
                        <p>Already have an account?</p>
                        <Link to="/signin">Log In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

