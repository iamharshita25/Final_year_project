import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // Import the CSS file

export default function Login() {
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
        <div className="login-container">
            <div className="left-panel">
                <h1>WELCOME BACK</h1>
                <img
                    src="src/routes/loginpage/there-is-woman-sitting-floor-with-laptop-generative-ai_791316-56366-removebg-preview.png" // Replace with the path to your image
                    alt="Illustration"
                    className="left-image"
                />
            </div>
            <div className="right-panel">
                <h1>LOGIN</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <input
                            type="text"
                            placeholder="Username"
                            id="username"
                            aria-label="Username"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-container">
                        <input
                            type="password"
                            placeholder="Password"
                            id="password"
                            aria-label="Password"
                            onChange={handleChange}
                        />
                    </div>
                    <button className="login-button">LOGIN</button>
                </form>
                <p className="or-login">Or Login With</p>
                <div className="social-login">
                    
                    <button className="google-login">Google</button>
                   
                </div>
                <p className="signup-text">
                    Not a Member Yet? <Link to="/signup">Sign In</Link>
                </p>
            </div>
        </div>
    );
}

