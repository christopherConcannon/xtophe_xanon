import React from 'react'

const Navbar = () => {
  return (
    <nav id="navbar" className="container">
      <div className="logo">
        <a href="index.html">Xtophe Xanon</a>
      </div>
      <ul className="nav-items">
          <li><a className="current" href="index.html">Work</a></li>
          <li><a href="contact.html">Contact</a></li>
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
