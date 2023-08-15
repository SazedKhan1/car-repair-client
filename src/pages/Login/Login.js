import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginpic from '../../assets/login/login.jpg'
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const { userLogin } = useContext(AuthContext)
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(result => {
                const user = result.user
                console.log('successfully log in ', user)

            })
            .catch(err => console.error(err))
    }
    return (

        <div className="hero mx-auto bg-base-200 p-16">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-3 text-center text-purple-800">Login now!</h1>
                    <img src={loginpic} alt="" srcset="" />
                </div>
                <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type='password' name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <span>New to our website???? <Link to='/signup' className='underline text-blue-600'>Sign Up</Link></span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Login;