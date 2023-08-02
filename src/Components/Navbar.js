import React from 'react'
import {
    Link
  } from "react-router-dom";
  
const Navbar = () => {
    return (
        <div className="container p-0">
            <nav className="navbar navbar-expand-lg bg-secondary navbar-dark">
                <a href="" className="navbar-brand d-block d-lg-none">Navigation</a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav m-auto">
                        <Link to="/" className="nav-item nav-link">Home</Link>
                        <Link to="/portfolio" className="nav-item nav-link">Portfolio</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        <Link to="/my-github-repositories" className="nav-item nav-link">Repositories</Link>
                        <Link to="/contact"  className="nav-item nav-link">Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
