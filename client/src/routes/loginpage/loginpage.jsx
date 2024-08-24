import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"; // Import the CSS file

export default function Login() {
    const [formData, setFormData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleChange = (e) => {
        setFormData(
            {
                ...formData,
                [e.target.id]: e.target.value
            }
        )
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const res = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            const data = await res.json();
            if (data.success === false) {
                setLoading(false)
                setError(data.message)
                return;
            }
            setLoading(false)
            setError(null)
            navigate('/')
            console.log(data);
        } catch (error) {
            setLoading(false)
            setError(error.message)
        }


    }

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
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <input
                            type='email'
                            placeholder='Email'
                            id='email'
                            aria-label='Email'
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
                    <button className="login-button" disabled={loading}>
                        {loading ? 'Loading...' : 'Sign In'}
                    </button>
                </form>
                {/* <p className="or-login">Or Login With</p> */}
                <div className="social-login">
                    
                    <button className="google-login">Google</button>
                   
                </div>
                <p className="signup-text">
                    <p>Dont have an account?</p>
                    <Link to="/signup">Sign up</Link>
                </p>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
}

