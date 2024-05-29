import React from 'react'
import "./Header.css"
import { LOGO } from '../../utils/constants';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header flex justify-between items-center px-12 pt-4 pb-3 bg-white w-full'>
            <Link to="/">
                <div className='logo cursor-pointer'>
                    <img src={LOGO} alt="logo" />
                </div>
            </Link>
            <div className=' flex list-none gap-12 font-medium text-xl'>
                <li className='cursor-pointer'>
                    <NavLink to="/" >Home</NavLink>
                </li>
                <li className='cursor-pointer'>
                    <Link to="/about">About</Link>
                </li>
                <li className='cursor-pointer'>
                    <Link to="/cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></Link>
                </li>
                <li className='cursor-pointer'>
                    <Link to="/contact">Contact</Link>
                </li>
            </div>
        </div>
    )
}

export default Header;
