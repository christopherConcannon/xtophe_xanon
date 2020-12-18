import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav id="navbar" className="container">
      <div className="logo">
        <Link to="/">Xtophe Xanon</Link>
      </div>
      <ul className="nav-items">
          <li><Link className="current" to="/">Work</Link></li>
          <li><Link to="/contact">Contact</Link></li>
      </ul>
    
      <div className="overlay-wrap">
        <input type="checkbox" className="toggler" />
        {/*inner empty div will become hamburger line */}
        <div className="hamburger"><div></div></div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li><a href="index.html">Work</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
