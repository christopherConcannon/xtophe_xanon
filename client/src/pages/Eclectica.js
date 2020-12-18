import React from 'react'
import { Link } from 'react-router-dom'

const Eclectica = () => {
  return (
    <React.Fragment>
          <section className="showcase">
      <div id="portfolio-imgs" className="container">
        <h1>Eclectica</h1>
        <div data-aos="fade-up">
          <img className="rsp-image" src="images/camino-3x2.jpg"  alt="" />
        </div>
      </div> 
    </section>
    <section className="pagination page-nav-left container">
        <Link to="/myco">
          <svg className="caret-left-icon" width="18" height="32" viewBox="0 -1 9 16">
            <polyline stroke="#000" fill="none" stroke-miterlimit="10" points="7.3,14.7 2.5,8 7.3,1.2"></polyline>
          </svg>
          <h2>Myco</h2>
        </Link>
    </section>
    </React.Fragment>
  )
}

export default Eclectica
