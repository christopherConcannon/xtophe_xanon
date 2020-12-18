import React from 'react'
import { Link } from 'react-router-dom'

const Myco = () => {
  return (
    <React.Fragment>
       <section className="Myco showcase">
      <div id="portfolio-imgs" className="container">
        <h1>Myco</h1>
        <div data-aos="fade-up">
          <img className="rsp-image" src="images/myco-2-3x2.jpg"  alt="" />
        </div>
        <div data-aos="fade-up">
          <img className="rsp-image" src="images/myco-3-2x3-extrude.jpg"  alt="" />
        </div>
      </div> 
    </section>
    <section className="description">
      <p>Images in the key of mushroom</p>
    </section>
    <section className="pagination container">
        <Link to="/quixote">
          <svg className="caret-left-icon" width="18" height="32" viewBox="0 -1 9 16">
            <polyline stroke="#000" fill="none" strokeMiterlimit="10" points="7.3,14.7 2.5,8 7.3,1.2"></polyline>
          </svg>
          <h2>Quixote</h2>
        </Link>
        <Link to="/eclectica">
          <h2>Eclectica</h2>
          <svg className="caret-right-icon" width="18" height="32" viewBox="0 -1 9 16">
            <polyline stroke="#000" fill="none" strokeMiterlimit="10" points="1.6,1.2 6.5,7.9 1.6,14.7"></polyline>
          </svg>
        </Link>
    </section>
    </React.Fragment>
  )
}

export default Myco
