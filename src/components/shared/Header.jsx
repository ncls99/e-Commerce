import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className='main_header'>
            <h1 className='header_title'>
                <Link to='/'>e-Commerce</Link>
            </h1>
            <nav className='header_nav'>
                <ul className='header_list'>
                    <li className='header_item'>
                        <NavLink className='header_link' to='/login'>
                            login
                        </NavLink>
                    </li>
                    <li className='header_item'>
                        <NavLink className='header_link' to='/purchases'>
                            Purchases
                        </NavLink>
                    </li>
                    <li className='header_item'>
                        <NavLink className='header_link' to='/cart'>
                            Cart
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header