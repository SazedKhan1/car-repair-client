import React, { useContext } from 'react';
import signuppic from '../../assets/login/signup.jpg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
const Signup = () => {

    const { createUser } = useContext(AuthContext)

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(err => console.error(err))
    }
    return (
        <div className="hero mx-auto bg-base-200 p-16">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-3 text-center text-purple-800">Sign Up</h1>
                    <img src={signuppic} alt="" srcset="" />
                </div>
                <form onSubmit={handleSignUp} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Your Name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" required name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <span>New to our website???? <Link to='/login' className='underline text-blue-600'>Login</Link></span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">SignUp</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;