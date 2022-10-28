import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './styles/header.css'

const Header = () => {
    return (
        <header className='main_header'>
            <h1 >
                <Link className='header_title' to='/'>e-Commerce</Link>
            </h1>
            <nav className='header_nav'>
                <ul className='header_list'>
                    <li className='header_item'>
                        <NavLink className='header_link borders_left' to='/login'>
                        <i class="fa-solid fa-right-to-bracket"></i>
                        </NavLink>
                    </li>
                    <li className='header_item '>
                        <NavLink className='header_link borders_mid' to='/purchases'>
                        <i class="fa-solid fa-bag-shopping"></i>
                        </NavLink>
                    </li>
                    <li className='header_item'>
                        <NavLink className='header_link border_right' to='/cart'>
                        <i class="fa-solid fa-cart-shopping"></i>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header