import React from 'react'
import '../styles/Header.css'
import Contact from '../pages/Contact'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header>
        <div className="header">
            <h1 className="logo">COFFY</h1>
            <nav className="navBar">
                <Link className="enlace" href="">About</Link>
                <Link className="enlace" to={'/contact'}>Contact</Link>
                <Link className="enlace" to={'/shop'}>Shop</Link>
                <button className="btn">Log In</button>
                <div>
                    <Link to={'/shop'} className="btn2">Go shopping</Link>
                </div>
            </nav>
        </div>

        
    </header>
    </div>
  )
}

export default Header