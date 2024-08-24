import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
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
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit} >
               
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
                
                <button disabled={loading}>
                    {loading ? 'Loading...' : 'Sign In'}
                </button>
            </form>
            <div>
                <p>Dont have an account?</p>
                <Link to="/signup">Sign up</Link>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}
