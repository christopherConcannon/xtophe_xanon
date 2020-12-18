import React from 'react'
import { Link } from 'react-router-dom'

const Bistrot = () => {
  return (
  <>
   <section className="Bistrot showcase work">
      <div id="portfolio-imgs" className="container">
        <h1>bistrot</h1>
         <div data-aos="fade-up"> 
          <img className="rsp-image" src="images/liberte-2x3-twistd.jpg"  alt="" />
        </div>
        <div data-aos="fade-up">
          <img className="rsp-image" src="images/metro-3x2-stained-glass.jpg"  alt="" />
        </div>
        <div data-aos="fade-up">
          <img className="rsp-image" src="images/swans-2x3-posterize.jpg" alt="" />
        </div>
        
      </div> 
    </section>
    <section className="pagination container page-nav-right">
      {/* <div className="page-nav-right"> */}
      {/* <div className=""> */}
        <Link to="/quixote">
          <h2>Quixote</h2>
          <svg className="caret-right-icon" width="18" height="32" viewBox="0 -1 9 16">
            <polyline stroke="#000" fill="none" strokeMiterlimit="10" points="1.6,1.2 6.5,7.9 1.6,14.7"></polyline>
          </svg>
        </Link>
      {/* </div> */}
    </section>
  </>
  )
}

export default Bistrot
