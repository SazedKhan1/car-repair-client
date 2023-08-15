import React from 'react';
import logo from '../../assets/Logo/logo.jpg'
import { Link } from 'react-router-dom';
const Header = () => {
    const menuItems = <>

        <><Link to='/'>Home</Link></>
        <><Link to='/login'>Login</Link></>
    </>

    return (
        <div className="navbar bg-black text-white rounded mt-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm gap-5 dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <img className='h-20' src={logo} alt="" srcset="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-5 px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-warning">Appointment</button>
            </div>
        </div>
    );
};

export default Header;